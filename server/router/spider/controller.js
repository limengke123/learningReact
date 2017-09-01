/**
 * Created by li on 2017/9/1.
 */
const fs = require('fs');
const request = require("request-promise");
const cheerio = require("cheerio");
const mkdirp = require('mkdirp');
const config = require('./config');
const dowload = async (ctx,next)=>{
    const dir = 'images';
    let links = [];
    mkdirp(dir);
    var urls = [];
    let tasks = [];
    let downloadTask = [];
    let url = config.url;
    for(let i = 1; i<= config.size; i++){
        let link = `${url}_${i}.html`;
        if(i==1){
            link = `${url}.html`;
        }
        tasks.push(getResLink(i,link))
    }
    links = await Promise.all(tasks);
    console.log(`links============`,links.length);

    for(let i = 0; i<links.length;i++){
        let item = links[i];
        let index = item.split("___")[0];
        let src = item.split("___")[1];
        downloadTask.push(downloadImg(src,dir,index+links[i].substr(-4,4)));
    }
    await Promise.all(downloadTask);
};
async function downloadImg(url,dir,filename){
    console.log(`dowload begin----`,url);
    request.get(url).pipe(fs.createWriteStream(`${dir}/${filename}`)).on("close",function () {
        console.log(`dowload success`,url);
    });

}
async function getResLink(index,url) {
    const body = await request(url);
    let urls = [];
    var $ = cheerio.load(body);
    $(config.rule).each(function() {
        var src = $(this).attr('src');
        urls.push(src);
    });
    return `${index}___${urls[0]}`;
}



module.exports = {
    dowload
};







