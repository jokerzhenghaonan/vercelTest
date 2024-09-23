// pages/api/extract-mp3.js
import FFmpeg from '@ffmpeg/ffmpeg';
import ytdl from 'ytdl-core';

const { createFFmpeg, fetchFile } = FFmpeg as any;

export default async function handler(req, res) {
  const { url } = req.body;
  const videoInfo = await ytdl.getInfo(url);
  const { videoId, title } = videoInfo.videoDetails;

  const ffmpeg = createFFmpeg({ log: true });
  await ffmpeg.load();

  ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(`https://www.youtube.com/watch?v=${videoId}`));

  await ffmpeg.run(
    '-i', 'input.mp4',
    '-vn',
    '-acodec', 'libmp3lame',
    '-ab', '128k',
    'output.mp3'
  );

  const data = ffmpeg.FS('readFile', 'output.mp3');

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Content-Disposition', `attachment; filename="${title}.mp3"`);
  res.send(data);
}