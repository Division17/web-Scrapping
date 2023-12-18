const request=require("request-promise")
const fs=require("fs")
const cheerio=require("cheerio")
const json2csv =require("json2csv").Parser

const url="https://sanji.to/one-piece-100";

(async ()=>{
  let data =[]
    const response = await request({
  uri:url,
  header:{
   " Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
   "Accept-Encoding":"gzip, deflate, br",
  " Accept-Language":"en-US,en;q=0.9"
   },
       gzip:true
    })
    const $ =cheerio.load(response)
    const animeName= $('div[class="anisc-detail"]>h2').text()
    const animeYear=$('div[class="anisc-info"] span[class="name"]').text()
    const animeSummary=$('div[class="anisc-detail"] div[class="text"]').text().trim()
    const overview=$('div[class="anisc-info"] span[class="name"]').text()

    data.push({animeName, animeYear, animeSummary})

     const j2cv=new json2csv()
     const csv=j2cv.parse(data)
     fs.writeFileSync("./anime.csv",csv,"UTF-8")
}
)()