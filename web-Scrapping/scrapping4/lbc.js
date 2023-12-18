const request=require("request")
const cheerio=require("cheerio")

const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"

request(url,cb)

function cb(error, reponse, html)
{
    if(error){
        console.log(error)
    }
    else{
       handleHtml(html)
    }
}

function handleHtml(html){
     const $= cheerio.load(html)
     const data=$(' p[class="ci-html-content"]')
     const text=$(data[0]).text()
     console.log(text)
                         }
