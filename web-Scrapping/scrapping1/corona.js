const request = require('request')

const cheerio= require("cheerio")
request('https://www.worldometers.info/coronavirus', cb)
function cb(error, html) {

    if(error){
    console.error('error:', error)
     } // Print the error if one occurred
     else{
                 handleHtml(html) // Print the HTML for the Google homepage.
  }
 
}

function handleHtml(html){
    let selTool=cheerio.load(html)
    let data=selTool("#maincounter-wrap span") 
//    for(let i=0;i<data.length;i++)
  //  {
   //     let content=selTool(data[i]).text()
   //  console.log
    //}
         let total   = selTool(data[0]).text()
         let deaths  = selTool(data[1]).text()
         let recoverd= selTool(data[2]).text()
       console.log("Total cases:-"+total) 
       console.log("death cases:-"+deaths) 
       console.log("Total recovered:-"+recoverd) 
}








<div class="ds-leading-[0]"><a href="/cricketers/trent-boult-277912" class="ds-inline-flex ds-items-start ds-leading-none ds-max-w-full"><span class="ds-text-tight-m ds-font-medium ds-text-typo ds-underline ds-decoration-ui-stroke hover:ds-text-typo-primary hover:ds-decoration-ui-stroke-primary ds-block ds-whitespace-nowrap ds-overflow-hidden ds-text-ellipsis">Trent Boult</span></a><span class="ds-text-tight-s ds-font-regular ds-text-typo-mid3">, MI</span></div>