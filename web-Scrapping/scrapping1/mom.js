const request=require("request")
const cheerio=require("cheerio")
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(url,cb)

function cb(err,html){
    if(err){
        console.log(err)
    }
    else{
        handleHtml(html)
    }
}

function handleHtml(html){
    const $=cheerio.load(html)
    const data=$('.ds-leading-[0] .ds-inline-flex.ds-items-start.ds-leading-none.ds-max-w-full .ds-text-tight-m.ds-font-medium.ds-text-typo.ds-underline.ds-decoration-ui-stroke.ds-block.ds-whitespace-nowrap.ds-overflow-hidden.ds-text-ellipsis').text()
    console.log(data[0])
}