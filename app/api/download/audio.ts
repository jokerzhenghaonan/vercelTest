import ytdl from '@distube/ytdl-core';
import axios from 'axios';  
import fs from 'fs';  

const cookies = [
    { name: "cookie1", value: [
        {
            "domain": ".youtube.com",
            "expirationDate": 1757930499.190503,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-1PSIDTS",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "sidts-CjEBQlrA-J4Vy4FTy3PJDnVgRoqE70rCNCIaSmrcAXQQZx0Cr89IWYaurEm0HJwPKYHqEAA",
            "id": 1
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1760535962.79927,
            "hostOnly": false,
            "httpOnly": false,
            "name": "__Secure-3PAPISID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "nxX4aSyTGEIxx8HK/An5-xX7VL_HcQxvNm",
            "id": 2
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1760535962.799315,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSID",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "g.a000nwhWwpYJbjKww4aR14Ghe8Qi-0njqkSjnbgXl9yDfLBZKyWY8Gwq6b-fEuOR86vOIdFSkQACgYKAeQSARASFQHGX2Mi9NW5eEwGI5j_aRdW5SSHwhoVAUF8yKq9_lNbbr4aMGj1eNJoNyLG0076",
            "id": 3
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757930741.386491,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSIDCC",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AKEyXzXtzaeEKry5fp3UYce_nwkV4gOD52ndZURBL2KPG0uNSNhjTrYos0Go8fNu7YPGlBYh_l8",
            "id": 4
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1757930499.190563,
            "hostOnly": false,
            "httpOnly": true,
            "name": "__Secure-3PSIDTS",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "sidts-CjEBQlrA-J4Vy4FTy3PJDnVgRoqE70rCNCIaSmrcAXQQZx0Cr89IWYaurEm0HJwPKYHqEAA",
            "id": 5
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1759418329.780583,
            "hostOnly": false,
            "httpOnly": false,
            "name": "_ga",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "GA1.1.1095825434.1724858330",
            "id": 6
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1759421448.370443,
            "hostOnly": false,
            "httpOnly": false,
            "name": "_ga_VCGEPY40VB",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "GS1.1.1724861448.2.0.1724861448.60.0.0",
            "id": 7
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1732634327,
            "hostOnly": false,
            "httpOnly": false,
            "name": "_gcl_au",
            "path": "/",
            "sameSite": "unspecified",
            "secure": false,
            "session": false,
            "storeId": "0",
            "value": "1.1.173646635.1724858328",
            "id": 8
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1760535963.047436,
            "hostOnly": false,
            "httpOnly": true,
            "name": "LOGIN_INFO",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "AFmmF2swRQIgXG0yqM5OXSPXyovapo3bu2lKxMrbLTknyvniFJ36ZmgCIQCk64KV4f94GaUMJo8bv9MIZcL7zkusnV8u88evNOa0rQ:QUQ3MjNmdzBpS2xwZkU1bDFUNnhjZVpaSHU4RmVYUFZfNWVfblJuQ3N6Ukc4djZ2NFJLdk0zSzh5RkpwQXk0c25aaDl0VDJJYktvQjFhaG11SnFhTTBxZF9PTjBuUFplQk5WRDhiNmVHMEl0Rkw3RlQ1cVBmT29UQ2VuUDFUcjZIdmswQ29SWERmRTZsR2JOd2x6Mm12VElYMFdqZ0E2eXlR",
            "id": 9
        },
        {
            "domain": ".youtube.com",
            "expirationDate": 1760954497.309718,
            "hostOnly": false,
            "httpOnly": false,
            "name": "PREF",
            "path": "/",
            "sameSite": "unspecified",
            "secure": true,
            "session": false,
            "storeId": "0",
            "value": "f7=4100&tz=Asia.Shanghai&f4=10000",
            "id": 10
        }
        ]},
];
const agent = ytdl.createProxyAgent({ uri: "http://127.0.0.1:7890" }, cookies);


async function tryProcessAudio(url: string, retries = 0){
    console.log(`开始处理 YouTube 音频, URL: ${url}, 剩余重试次数: ${retries}`);
        const videoInfo = await ytdl.getInfo(url, { agent });  
        console.log('获取到视频信息', videoInfo);  
        
        const audioFormat = ytdl.chooseFormat(videoInfo.formats, {  
            quality: 'highestaudio',  
            requestOptions: {  
                agent,  
            }  
        });  
        
        if (!audioFormat || !audioFormat.url) {  
            throw new Error('无法获取音频 URL');  
        }  
        
        console.log('获取到音频 URL:', audioFormat.url);  
        const videoUrl = audioFormat.url; 
        return videoUrl; 
        // const destPath = './downloaded_video.mp4';  
        // downloadVideo(videoUrl ,destPath);
}

async function downloadVideo(url, dest) {  
    try {  
        const response = await axios({  
            method: 'get',  
            url: url,  
            responseType: 'stream'  
        });  
  
        response.data.pipe(fs.createWriteStream(dest));  
  
        return new Promise((resolve, reject) => {  
            response.data.on('end', resolve);  
            response.data.on('error', reject);  
        });  
    } catch (error) {  
        console.error('下载失败:', error);  
    }  
}  

export async function processYoutubeAudio(url: string): Promise<void> {
    try {
        return await tryProcessAudio(url);
    } catch (error) {
        console.error('processYoutubeAudio 最终错误:', error);
        throw error;
    }








}

















