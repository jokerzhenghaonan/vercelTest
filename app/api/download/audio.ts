import ytdl from '@distube/ytdl-core';
// import axios from 'axios';  
// import fs from 'fs';  
const { getRandomIPv6 } = require("@distube/ytdl-core/lib/utils");
const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1759040170.880122,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjEBQlrA-IW_mAlMjLElKrChS71Si-VLm-hjC96vGin20e6p0n9ZLgfWZr6w4Oh11JIhEAA",
        "id": 1
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761042620,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PAPISID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "nxX4aSyTGEIxx8HK/An5-xX7VL_HcQxvNm",
        "id": 2
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761042620,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "g.a000nwhWwpYJbjKww4aR14Ghe8Qi-0njqkSjnbgXl9yDfLBZKyWY8Gwq6b-fEuOR86vOIdFSkQACgYKAeQSARASFQHGX2Mi9NW5eEwGI5j_aRdW5SSHwhoVAUF8yKq9_lNbbr4aMGj1eNJoNyLG0076",
        "id": 3
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759040531.533088,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzXs4VSXEuc29cPbyXzkq9gO-Tego38szJ1tIVWXfrCPPlZ4N4jFA73nGdyLQZ-akWMYffw",
        "id": 4
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759040170.880185,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjEBQlrA-IW_mAlMjLElKrChS71Si-VLm-hjC96vGin20e6p0n9ZLgfWZr6w4Oh11JIhEAA",
        "id": 5
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761042620,
        "hostOnly": false,
        "httpOnly": false,
        "name": "LOGIN_INFO",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AFmmF2swRAIgYlft9b09IyYe5podBDomFxF4F-jVa4Y0OaEHnNJL3wACIDy9I42UEzcmN0OUlA3ILXSAz5E7ZCg91Sxz1JJg-XIR:QUQ3MjNmd1V6ZDN5MlpuMlF6d0FCckZlSHFjZU1TTDR5eThxemFuaTRKN25HNEpweTlUTGd1WGs4cVhpZEtfMFBYeW5NYi1ybkhYOUk4Mkx4cVJJRmJFNmx2M2JRWTh3VXVxaFN2a3pFcnI0aWNhZGdONEQyRTJKVEJzeW03b2U2Z1RhbHljMEtycDM3cVhhSnQzaFkwVk81ZUxjaXZ3a3dR",
        "id": 6
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1762055340,
        "hostOnly": false,
        "httpOnly": false,
        "name": "PREF",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "f7=4100&tz=Asia.Shanghai&f4=10000",
        "id": 7
    }
    ]

//const agent = ytdl.createAgent(cookies);
 const agent = ytdl.createProxyAgent({uri: "http://127.0.0.1:7890"}, cookies
);
// const agentForARandomIP = ytdl.createAgent(undefined, {
//     localAddress: getRandomIPv6("2001:2::/48"),
//   });

async function tryProcessAudio(url: string, retries = 0){
    console.log(`开始处理 YouTube 音频, URL: ${url}, 剩余重试次数: ${retries}`);
        const videoInfo = await ytdl.getInfo(url, { agent: agent });  
        console.log('获取到视频信息', videoInfo);  
        
        const audioFormat = ytdl.chooseFormat(videoInfo.formats, {  
            quality: 'lowestaudio',
        });  
        
        if (!audioFormat || !audioFormat.url) {  
            throw new Error('无法获取音频 URL');  
        }  
        
        console.log('获取到音频 URL:', audioFormat.url);  
        return {audioUrl: audioFormat.url}
        
}  

export async function processYoutubeAudio(url: string): Promise<any> {
    try {
        return await tryProcessAudio(url);
    } catch (error) {
        console.error('processYoutubeAudio 最终错误:', error);
        throw error;
    }
}