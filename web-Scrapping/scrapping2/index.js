const request=require("request-promise")
const fs=require("fs")
const js2cv=require("json2csv").Parser
const cheerio=require("cheerio")

let movie=["https://www.imdb.com/title/tt9362722/?ref_=hm_top_tt_i_4","https://www.imdb.com/title/tt0439572/?ref_=hm_top_tt_i_2", " https://www.imdb.com/title/tt5090568/?ref_=tt_sims_tt_i_1"
 ];

(async () => {
    let data = []
    for(let i of movie){
        const response = await request({
            uri: i,
            header: {
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br",
                " Accept-Language": "en-US,en;q=0.9"
            },
            gzip: true
        })
        let $ = cheerio.load(response)
        const movieName = $('div[class="sc-52d569c6-0 kNzJA-D"] h1 span').text()
        let movieYear = $('ul[class="ipc-inline-list ipc-inline-list--show-dividers sc-afe43def-4 kdXikI baseAlt"]>li[class="ipc-inline-list__item"]>a[class="ipc-link ipc-link--baseAlt ipc-link--inherit-color"]').text()
        const movieSummary = $('div[class="sc-385ac629-10 SacCW"]>section[class="sc-52d569c6-4 eAiKYC"] span[class="sc-6a7933c5-0 cUeLJx"]').text()
       let movieRating = $('div[class="sc-bde20123-2 gYgHoj"] ').text()
       movieRating=movieRating.slice(-6)
       movieYear=movieYear.trimEnd()
    
        data.push({movieName, movieYear,  movieSummary, movieRating})
    }
     

    const j2cs = new js2cv()
    const csv = j2cs.parse(data)
    fs.writeFileSync("./movies.csv", csv, "UTF-8")

 }

)()


