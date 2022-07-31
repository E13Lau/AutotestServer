const express = require('express')
const download = require('download')
const schedule = require('node-schedule')
const deploy = require('./deploy')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    /*
    {
        "uuid": "12345678-1234-1234-1234-123456789012",
    }
    */
    (async () => {
        console.log('Downloading ...');
        const url = 'https://pics3.baidu.com/feed/622762d0f703918ffaa880a5c2a39f9d58eec489.jpeg?token=c2e5dfde031fc8f21c127f7353f4486f';
        const fileDir = './files';
        // 1. 下载包到files文件夹
        // https://www.webmound.com/nodejs-download-file-best-guide/
        const file = await download(url, fileDir);
        console.log(`Downloaded file`);

        // 取得平台 ios/android
        const platfrom = 'ios';
        // 2. 部署到手机
        let text = deploy('node', 'v8.11.0', 'https://nodejs.org/en/');
        // 3. 调用jenkins接口

    })();
    res.send('OK');
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 定时任务
// https://www.jianshu.com/p/8d303ff8fdeb
const getPackageForToday = () => {
    // 每周星期一到星期五早上6点执行
    schedule.scheduleJob('0 0 6 * * 1-5', () => {
        // 拉取最新的iOS dev包

        // 拉取最新的Android dev包
        console.log('getPackageForToday');
    });
}
getPackageForToday();