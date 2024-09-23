import { NextRequest, NextResponse } from 'next/server';
import { processYoutubeAudio } from './audio';

export async function POST(request: NextRequest) {
    console.log('开始处理 POST 请求 /api/download');

    try {
        const { url } = await request.json();
        console.log('接收到的 YouTube URL:', url);

        if (!url || typeof url !== 'string') {
            console.log('无效的 YouTube URL');
            return NextResponse.json({ error: '无效的YouTube URL' }, { status: 400 });
        }

        console.log('开始处理 YouTube 音频');
        await processYoutubeAudio(url);

      

        return NextResponse.json(
          { status: 200 });
        } catch (error: any) {
            console.error('处理 YouTube URL 时出错:', error);
            console.error('错误堆栈:', error.stack);
            return NextResponse.json({ error: '处理 YouTube URL 时出错: ' + error.message }, { status: 500 });
        }
}