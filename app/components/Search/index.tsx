'use client'

import { useState } from "react";

export default function Search() {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        setIsLoading(true);
        setError(null);
        console.log("111111111")
        try {
            const res = await fetch('/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url }),
            });

            if (!res.ok) {
                throw new Error('服务器响应错误');
            }

            const data = await res.json();
            console.log('处理结果:', data);

            //创建一个隐藏的<a>标签来下载文件
            const link = document.createElement('a');
            link.href = data.audioUrl;
            link.download = "";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('下载出错:', error);
            setError('下载过程中出现错误,请稍后重试');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mb-8">
                <h1>The Best Youtube Downloader for free999</h1>
            </div>

            <div className="w-full max-w-md">
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="url"
                        id="download-input"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="输入YouTube URL..."
                        required
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleClick}
                        disabled={isLoading}
                    >
                        {isLoading ? '处理中...' : '下载'}
                    </button>
                </div>
            </div>
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </>
    )
}