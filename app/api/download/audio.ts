// import ytdl from '@distube/ytdl-core';
// import {  NextResponse } from 'next/server';
// import chromium from "@sparticuz/chromium-min";

// // import axios from 'axios';  
// // import fs from 'fs';  
// // const { getRandomIPv6 } = require("@distube/ytdl-core/lib/utils");
// // const cookies = [
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1759040170.880122,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "__Secure-1PSIDTS",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "sidts-CjEBQlrA-IW_mAlMjLElKrChS71Si-VLm-hjC96vGin20e6p0n9ZLgfWZr6w4Oh11JIhEAA",
// //         "id": 1
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1761042620,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "__Secure-3PAPISID",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "nxX4aSyTGEIxx8HK/An5-xX7VL_HcQxvNm",
// //         "id": 2
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1761042620,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "__Secure-3PSID",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "g.a000nwhWwpYJbjKww4aR14Ghe8Qi-0njqkSjnbgXl9yDfLBZKyWY8Gwq6b-fEuOR86vOIdFSkQACgYKAeQSARASFQHGX2Mi9NW5eEwGI5j_aRdW5SSHwhoVAUF8yKq9_lNbbr4aMGj1eNJoNyLG0076",
// //         "id": 3
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1759040531.533088,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "__Secure-3PSIDCC",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "AKEyXzXs4VSXEuc29cPbyXzkq9gO-Tego38szJ1tIVWXfrCPPlZ4N4jFA73nGdyLQZ-akWMYffw",
// //         "id": 4
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1759040170.880185,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "__Secure-3PSIDTS",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "sidts-CjEBQlrA-IW_mAlMjLElKrChS71Si-VLm-hjC96vGin20e6p0n9ZLgfWZr6w4Oh11JIhEAA",
// //         "id": 5
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1761042620,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "LOGIN_INFO",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "AFmmF2swRAIgYlft9b09IyYe5podBDomFxF4F-jVa4Y0OaEHnNJL3wACIDy9I42UEzcmN0OUlA3ILXSAz5E7ZCg91Sxz1JJg-XIR:QUQ3MjNmd1V6ZDN5MlpuMlF6d0FCckZlSHFjZU1TTDR5eThxemFuaTRKN25HNEpweTlUTGd1WGs4cVhpZEtfMFBYeW5NYi1ybkhYOUk4Mkx4cVJJRmJFNmx2M2JRWTh3VXVxaFN2a3pFcnI0aWNhZGdONEQyRTJKVEJzeW03b2U2Z1RhbHljMEtycDM3cVhhSnQzaFkwVk81ZUxjaXZ3a3dR",
// //         "id": 6
// //     },
// //     {
// //         "domain": ".youtube.com",
// //         "expirationDate": 1762055340,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "PREF",
// //         "path": "/",
// //         "sameSite": "no_restriction",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "f7=4100&tz=Asia.Shanghai&f4=10000",
// //         "id": 7
// //     }
// //     ]


// // const agent = ytdl.createProxyAgent({uri: "http://127.0.0.1:7890"}, cookies
// // );
// // const agentForARandomIP = ytdl.createAgent(undefined, {
// //     localAddress: getRandomIPv6("2001:2::/48"),
// //   });

// async function tryProcessAudio(url: string, retries = 0){
//     console.log(`开始处理 YouTube 音频, URL: ${url}, 剩余重试次数: ${retries}`);
//     const cookieGet = await GET();
//     console.log(cookieGet)
//     const agent = ytdl.createAgent(cookieGet);
//         const videoInfo = await ytdl.getInfo(url, { agent: agent });  
//         console.log('获取到视频信息', videoInfo);  

//         const audioFormat = ytdl.chooseFormat(videoInfo.formats, {  
//             quality: 'lowestaudio',
//         });  

//         if (!audioFormat || !audioFormat.url) {  
//             throw new Error('无法获取音频 URL');  
//         }  

//         console.log('获取到音频 URL:', audioFormat.url);  
//         return {audioUrl: audioFormat.url}

// }  

// export async function processYoutubeAudio(url: string): Promise<any> {
//     try {
//         return await tryProcessAudio(url);
//         // return GET();
//     } catch (error) {
//         console.error('processYoutubeAudio 最终错误:', error);
//         throw error;
//     }
// }

// // 本地 Chrome 执行包路径、
// const localExecutablePath =
//   process.platform === "win32"
//     ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
//     : process.platform === "linux"
//     ? "/usr/bin/google-chrome"
//     : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// // 远程执行包
// /**  @type {import('next').NextConfig} */
// const remoteExecutablePath =
//   "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar";



// // 运行环境
// const isDev = process.env.NODE_ENV === "development";
// async function GET() {
//     let browser = null;
//     try {
//       // 引入依赖
//       const puppeteer = require('puppeteer');
//       console.log("puppeteer start")
//       // 启动
//       browser = await puppeteer.launch({
//         args: isDev ? [] : chromium.args,
//         defaultViewport: { width: 1920, height: 1080 },
//         executablePath: isDev
//           ? localExecutablePath
//           : await chromium.executablePath(remoteExecutablePath),
//         headless: true,
//       });
//       console.log("puppeteer  puppeteer.launch ")

//       // 打开页面
//       const page = await browser.newPage();
//       // 设置一个明显的自动化 User-Agent
//       await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/91.0.4472.114 Safari/537.36");
//       // 不隐藏 navigator.webdriver
//       await page.evaluateOnNewDocument(() => {
//         Object.defineProperty(navigator, 'webdriver', {
//           get: () => true,  // 默认 Puppeteer 会是 `true`，保持这个行为
//         });
//       });
//       console.log("puppeteer evaluateOnNewDocument ")

//       // 等待页面资源加载完毕
//       await page.goto("https://www.youtube.com", {
//         waitUntil: "networkidle0",
//         timeout: 100000,

//       });
//       console.log("puppeteer page.goto ")

//       // 打印页面标题
//       const blob = await page.screenshot({ type: "png" });
//       const cookies = await page.cookies();
//       const headers = new Headers();

//       headers.set("Content-Type", "image/png");
//       headers.set("Content-Length", blob.length.toString());
//       console.log("puppeteer headers ")

//        // 响应页面截图

//         // 响应页面截图
//       return cookies;
//       } catch (err) {
//         return "";

//       } finally {
//         // 释放资源
//         await browser.close();
//       }
//   }

// import ytdl from 'ytdl-core';
import youtubedl  from 'youtube-dl-exec';
import { NextResponse } from 'next/server';
import ytdl from '@distube/ytdl-core';
import chromium from "@sparticuz/chromium-min";
// import axios from 'axios';  
// import fs from 'fs';  
// const { getRandomIPv6 } = require("@distube/ytdl-core/lib/utils");
let cookies: [
  {
    name: 'VISITOR_INFO1_LIVE',
    value: 'UEtBReTMbTs',
    domain: '.youtube.com',
    path: '/',
    expires: 1744967688.844423,
    size: 29,
    httpOnly: true,
    secure: true,
    session: false,
    sameSite: 'None',
    priority: 'Medium',
    sameParty: false,
    sourceScheme: 'Secure',
    partitionKey: undefined
  },
  {
    name: 'YSC',
    value: 'eFQdNqZjMLw',
    domain: '.youtube.com',
    path: '/',
    expires: -1,
    size: 14,
    httpOnly: true,
    secure: true,
    session: true,
    sameSite: 'None',
    priority: 'Medium',
    sameParty: false,
    sourceScheme: 'Secure',
    partitionKey: undefined
  },
  {
    name: 'GPS',
    value: '1',
    domain: '.youtube.com',
    path: '/',
    expires: 1729417488.844231,
    size: 4,
    httpOnly: true,
    secure: true,
    session: false,
    priority: 'Medium',
    sameParty: false,
    sourceScheme: 'Secure',
    partitionKey: undefined
  }
]
import express from 'express';
import {HttpsProxyAgent}  from 'https-proxy-agent';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
// interface Cookie {
//   name: string;
//   value: string;
//   expirationDate?: number;
//   domain?: string;
//   path?: string;
//   expires: float;
//   secure?: boolean;
//   httpOnly?: boolean;
//   hostOnly?: boolean;
//   sameSite?: string;
// }
// const agent = ytdl.createProxyAgent({uri: "http://127.0.0.1:7890"}, cookies
// );
// const agentForARandomIP = ytdl.createAgent(undefined, {
//     localAddress: getRandomIPv6("2001:2::/48"),
//   });
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");

// Set the path to your ffmpeg binary
const ffmpegPath = path.join(process.cwd(), "tmp", "ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

// Replace the URL with the desired YouTube video URL
const videoUrl = "";

async function convertWebMToMP3(inputFilePath:string) {
  const outputFilePath = `output.mp3`;

  return new Promise((resolve, reject) => {
    ffmpeg(inputFilePath)
      .audioBitrate(128)
      .toFormat("mp3")
      .on("end", () => {
        console.log("Conversion finished successfully");
        resolve(outputFilePath);
      })
      
      .save(outputFilePath);
  });
}

async function downloadAndConvert(url: string) {
 // const webmFilePath = path.join(process.cwd(), "tmp", "output.webm");
  console.log("Download webmFilePath 111:");

  try {
    // Step 1: Download the audio as WebM
    
    youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: ['referer:youtube.com', 'user-agent:googlebot']
    }).then(output => console.log(output))
    // Step 2: Convert WebM to MP3
  //  const mp3Path = await convertWebMToMP3(webmFilePath);
    //console.log("MP3 saved to:", mp3Path);
        console.log("MP3 saved to:");

  } catch (err) {
    console.error("Error:", err);
  }
}

async function tryProcessAudio(url: string, retries = 0) {
  console.log(`开始处理 YouTube 音频, URL: ${url}, 剩余重试次数: ${retries}`);
  //  const cookieGet = await GET();
  //  const agent = ytdl.createProxyAgent({uri: "http://127.0.0.1:7890"}, cookies);
  //  const agent = ytdl.createAgent(cookies);
  //   console.log(agent, "55555")

  //   const videoInfo = await ytdl.getInfo(url, { agent: agent });  
  //   console.log('获取到视频信息', videoInfo);  
    
  //   const audioFormat = ytdl.chooseFormat(videoInfo.formats, {  
  //       quality: 'lowestaudio',
  //   });  
    
  //   if (!audioFormat || !audioFormat.url) {  
  //       throw new Error('无法获取音频 URL');  
  //   }  
    
  //   console.log('获取到音频 URL:', audioFormat.url);  
  downloadAndConvert(url)
    return {audioUrl: "111"}
        
}  

export async function processYoutubeAudio(url: string): Promise<any> {
  try {
    return await tryProcessAudio(url);
    // return GET();
  } catch (error) {
    console.error('processYoutubeAudio 最终错误:', error);
    throw error;
  }
}

// 本地 Chrome 执行包路径、
const localExecutablePath =
  process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
      ? "/usr/bin/google-chrome"
      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// 远程执行包
/**  @type {import('next').NextConfig} */
const remoteExecutablePath =
  "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar";



// 运行环境
const isDev = process.env.NODE_ENV === "development";
async function GET() {
  let browser = null;
  try {
    // 引入依赖
    const puppeteer = require('puppeteer');

    // 启动
    console.log('准备启动 Puppeteer');

    browser = await puppeteer.launch({
      args: isDev ? [] : chromium.args,
      defaultViewport: { width: 1920, height: 1080 },
      executablePath: isDev
        ? localExecutablePath
        : await chromium.executablePath(remoteExecutablePath),
      headless: true,  // 确保无头模式
      // Disable image loading for faster page loads
      ignoreHTTPSErrors: true,
    });

    console.log(browser, "1111")

    // 打开页面
    console.log('浏览器已启动，打开新页面');
    const page = await browser.newPage();

    // 启用请求拦截
    await page.setRequestInterception(true);
    page.on('request', (req: any) => {
      if (['image', 'stylesheet', 'font', 'media', 'script'].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // 设置一个明显的自动化 User-Agent
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/91.0.4472.114 Safari/537.36");
    // 不隐藏 navigator.webdriver
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => true,  // 默认 Puppeteer 会是 `true`，保持这个行为
      });
    });

    console.log(await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => true,  // 默认 Puppeteer 会是 `true`，保持这个行为
      });
    }), "2222");


    // 等待页面资源加载完毕
    console.log('准备访问页面');
    await page.goto("https://www.youtube.com", {
      waitUntil: "domcontentloaded",
      timeout: 8000,
    });

    console.log(await page.goto("https://www.youtube.com", {
      waitUntil: "domcontentloaded",
      timeout: 8000,
    }), "33333");

    // 打印页面标题
    const cookies = await page.cookies();
    console.log(cookies, "44444")

    // 响应页面截图
    return cookies
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );

  } finally {
    // 释放资源
    await browser.close();
  }
}