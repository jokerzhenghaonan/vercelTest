import ytdl from 'ytdl-core';

export const POST = async (req: any) => {
    try {
        const { url: videoUrl } = await req.json();

        if (!videoUrl) {
            return new Response(
                JSON.stringify({ message: 'Missing videoUrl parameter' }),
                {
                    status: 400,
                }
            );
        }

        const info = await ytdl.getInfo(videoUrl);
        const format = ytdl.chooseFormat(info.formats, {
            quality: 'highest',
            filter: 'audioandvideo', // 指定下载视频和音频轨道
        });

        //@ts-ignore
        const response = new Response(ytdl(videoUrl, { format }), {
            headers: {
                'Content-Disposition': `attachment; filename="video.mp4"`,
                'Content-Type': 'video/mp4',
                'Content-Length': format.contentLength,
            },
        });

        return response;
    } catch (error) {
        console.error('Error downloading video:', error);
        return new Response(JSON.stringify({ message: 'Error downloading video' }), {
            status: 500,
        });
    }
};