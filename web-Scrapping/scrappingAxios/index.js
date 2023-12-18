const axios = require("axios")
const cheerio= require("cheerio")

const url="https://sanji.to"

axios.get(url).then(
    response=>{
        if(response.status===200){
            const html=response.data
            const $= cheerio.load(html)
            const content =$("#maincounter-wrap>.span")
            const data= $(content[0]).text()
            console.log(data)
             
        }
     
            
        }
            )
.catch(error => {
    console.error("Error is"+ error)
}
)
