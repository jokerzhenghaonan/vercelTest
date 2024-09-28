import ytdl from '@distube/ytdl-core';
// import axios from 'axios';  
// import fs from 'fs';  

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-1PAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "jpcqrkccmG30stEH/AjZhZ0aaNnsYbsvAj",
        "id": 1
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000nwgwh_yYARnkAw1vV3LQStTvdd_ltbsdTxG8tx33ko_nnsHvpq8iPHcggDfWYeYvfW-hlAACgYKAbISARYSFQHGX2MiKoN3CCXZVs0Iz3zl_Bf-LhoVAUF8yKrI7biaVf07hPrXrqyuoiwG0076",
        "id": 2
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759038013.911201,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzUFRezK-oNiuhNh2zwABWAWw-FcrLJqf8RPdgU-n8dcof3f_2HOfmtXpamdsA-2BCWDLg",
        "id": 3
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759037470,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjIBQlrA-FkIkI7Wa_iyy2PUVvu2Ycvkj-ZAG_EpbuM-EQ1wYEFLlgJx9DHfF1sgvl2GORAA",
        "id": 4
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760287755,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PAPISID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "jpcqrkccmG30stEH/AjZhZ0aaNnsYbsvAj",
        "id": 5
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760287755,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "g.a000nwgwh_yYARnkAw1vV3LQStTvdd_ltbsdTxG8tx33ko_nnsHvcugSYFyjpdmKGL60hxa8EQACgYKAYYSARYSFQHGX2MilOdKHeXoHzEK86bJ9_o_WRoVAUF8yKpjyWFodRI6bJeL-3JRfEXp0076",
        "id": 6
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759038013.91122,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzWRGtHocb0Itq9XiKC0TWIqauFAK0q59jJsicgaFHhJ_sgzvXSdkzifgWofKluZP7Yfcg",
        "id": 7
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759037470,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "sidts-CjIBQlrA-FkIkI7Wa_iyy2PUVvu2Ycvkj-ZAG_EpbuM-EQ1wYEFLlgJx9DHfF1sgvl2GORAA",
        "id": 8
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": false,
        "name": "APISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "l9alYz2hxTSTRmcp/AqotPA1xgkcwvQzo_",
        "id": 9
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": true,
        "name": "HSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "Atl9KAWxYl7wA7Aam",
        "id": 10
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760287645,
        "hostOnly": false,
        "httpOnly": true,
        "name": "LOGIN_INFO",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AFmmF2swRAIgSa3GkeXyWc4lyKDLm7Lnoa76G-KJA06UI7Ihwwhr9W0CIAnK9hSO_Fpbt59FNAjsH6OREa9JH8n7dKICkcfuH4lz:QUQ3MjNmeUdUbjd1SGloM055TVdESDROalBua3FST3BBSXlvdDM3bTZlODQ0R0t2bS1pVHROeWJjb0NVMGFsZ05yRFNzek1sZ2lsRmNTb3REWVZCUlJvelJPMWt4Q0FRei12Tmxfa0NURHRWUmVOOElSRzNhVWdmRFBqTFVPN1FsV1I3MEhjLVJYcW5ZWC1fRGNfczZmLWFaQnNnN0Q4cjdn",
        "id": 11
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1762061476,
        "hostOnly": false,
        "httpOnly": false,
        "name": "PREF",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "tz=Asia.Shanghai",
        "id": 12
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SAPISID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "jpcqrkccmG30stEH/AjZhZ0aaNnsYbsvAj",
        "id": 13
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "g.a000nwgwh_yYARnkAw1vV3LQStTvdd_ltbsdTxG8tx33ko_nnsHvxPoXvlZabA8yAvsoUl1jegACgYKAZYSARYSFQHGX2MiyILNUhHVaVQNWyOjhyVudRoVAUF8yKoQzueBl21kuVhKSDQv2_yF0076",
        "id": 14
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1759038013.911135,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SIDCC",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": false,
        "storeId": "0",
        "value": "AKEyXzXwMTCl5c4klrjyDy-lct6QRNnVV-KuSdRP8YyUMNvcothANwEnWH23CI1agsrMHIiki0s",
        "id": 15
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1760256103,
        "hostOnly": false,
        "httpOnly": true,
        "name": "SSID",
        "path": "/",
        "sameSite": "unspecified",
        "secure": true,
        "session": false,
        "storeId": "0",
        "value": "AiUN8TV2mYCQ8rzu3",
        "id": 16
    }
    ]

const agent = ytdl.createAgent(cookies);
// const agent = ytdl.createProxyAgent({uri: "http://127.0.0.1:33210"}, cookies);


async function tryProcessAudio(url: string, retries = 0){
    console.log(`开始处理 YouTube 音频, URL: ${url}, 剩余重试次数: ${retries}`);
        const videoInfo = await ytdl.getInfo(url, { agent });  
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