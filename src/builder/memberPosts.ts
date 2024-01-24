import Parser from 'rss-parser';

const parser = new Parser()
export const parseRSSfeed = async(url:string)=>{
    const feed = await parser.parseURL(url)
    // return [feed.items.map((item) =>({
    //     title: item.title,
    //     url: item.link,
    // }))];

    return feed.items.map((item)=>{
        return{
            title:item.title,
            url:item.link,
        }
    })
    
}