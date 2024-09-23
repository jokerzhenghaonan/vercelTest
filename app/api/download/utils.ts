import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// 设置 FFmpeg 路径
//@ts-ignore
ffmpeg.setFfmpegPath(ffmpegPath);

// R2 存储桶配置
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME; // 你的 R2 存储桶名称
const R2_ENDPOINT = process.env.R2_ENDPOINT; // 你的 R2 endpoint
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID; // 你的 R2 access key ID
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY; // 你的 R2 secret access key

// 创建 S3 客户端
//@ts-ignore
const s3 = new S3Client({
    region: 'auto',
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

// YouTube 视频 URL
const videoUrl = 'https://www.youtube.com/watch?v=0SaGEUsdtBE';

// 创建临时文件路径
const videoTempPath = path.resolve('./public', 'video.mp4');
const audioTempPath = path.resolve('./public', 'audio.mp4');

// 尝试的视频质量级别
const videoQualities = ['137', '136', '135', '134'];

// 下载视频和音频流，并将合并后的视频上传到 R2
export default async function downloadAndUploadToR2(
    videoUrl = 'https://www.youtube.com/watch?v=0SaGEUsdtBE',
    qualityIndex = 0
) {
    if (qualityIndex >= videoQualities.length) {
        console.error('没有找到支持的视频格式');
        return;
    }

    const videoQuality = videoQualities[qualityIndex];
    console.log(`尝试下载视频质量: ${videoQuality}`);

    try {
        // 获取视频信息
        const info = await ytdl.getInfo(videoUrl);
        const videoTitle = info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, '_'); // 去除文件名中的非法字符

        // 下载视频和音频流
        const videoStream = ytdl(videoUrl, { quality: videoQuality });
        const audioStream = ytdl(videoUrl, { quality: 'highestaudio' });

        const videoWriteStream = videoStream.pipe(fs.createWriteStream(videoTempPath));
        const audioWriteStream = audioStream.pipe(fs.createWriteStream(audioTempPath));

        await Promise.all([
            new Promise((resolve, reject) => {
                videoWriteStream.on('finish', resolve);
                videoWriteStream.on('error', reject);
            }),
            new Promise((resolve, reject) => {
                audioWriteStream.on('finish', resolve);
                audioWriteStream.on('error', reject);
            }),
        ]);

        // 使用 child_process.spawn 调用 ffmpeg 合并视频和音频
        const ffmpegProcess = spawn('ffmpeg', [
            '-i', videoTempPath,
            '-i', audioTempPath,
            '-c:v', 'copy',
            '-c:a', 'copy',
            '-f', 'mp4',
            'pipe:1', // 输出到标准输出
        ]);

        // 创建一个缓冲区来存储视频流数据
        const chunks: any = [];
        // 监听 'data' 事件，将数据块添加到缓冲区
        ffmpegProcess.stdout.on('data', (chunk) => chunks.push(chunk));
        console.log('begin chunk')
        // 等待 ffmpeg 处理完成
        await new Promise((resolve, reject) => {
            ffmpegProcess.on('close', (code) => {
                if (code === 0) {
                    resolve(1);
                } else {
                    reject(new Error(`ffmpeg 进程退出，代码为 ${code}`));
                }
            });
            ffmpegProcess.stdout.on('error', reject);
        });

        // 合并缓冲区中的所有数据块
        const videoData = Buffer.concat(chunks);

        // 创建上传到 R2 的参数
        const uploadParams = {
            Bucket: R2_BUCKET_NAME,
            Key: `${videoTitle}.mp4`, // 使用视频标题作为文件名
            Body: videoData,
            ContentType: 'video/mp4',
            ContentLength: videoData.length,
        };

        // 上传视频到 R2
        const uploadCommand = new PutObjectCommand(uploadParams);
        await s3.send(uploadCommand);

        console.log('视频上传到 R2 完成！');

        // 删除临时文件
        fs.unlinkSync(videoTempPath);
        fs.unlinkSync(audioTempPath);

        // 返回 R2 对象的公开 URL
        const signedUrl = `${R2_ENDPOINT}/${R2_BUCKET_NAME}/${encodeURIComponent(
            `${videoTitle}.mp4`
        )}`;
        return {
            data: signedUrl,
        };
    } catch (error: any) {
        console.error('下载或上传过程中出错:', error);
        // 根据需要处理错误，例如：尝试下一个视频质量级别
        if (error.message.includes('ffmpeg')) {
            downloadAndUploadToR2(videoUrl, qualityIndex + 1);
        } else {
            throw error;
        }
    }
}