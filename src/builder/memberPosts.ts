import Parser from 'rss-parser';
import ogs from 'open-graph-scraper';


const parser = new Parser()
export type Member = {
    feedLink:string[]
    name:string
}
export type Post = {
    url:string
    title:string
    publishedAt:string
    ogImageUrl:string
    author:string
}
export const parseRSSfeed = async(url:string)=>{
    const feed = await parser.parseURL(url)
    // return [feed.items.map((item) =>({
    //     title: item.title,
    //     url: item.link,
    // }))];

    return feed.items.map((item)=>{
        return{
            title:item.title || '',
            url:item.link || '',
            publishedAt:item.isoDate || '',
        }
    })
    
}

export const getOgImagePath = async(url:string) =>{
    const data = await ogs({url})
    const {result} = data
    if(!result.success){

    }
    return (result as {ogImage:{url:string}}).ogImage.url
}

export const getmemberpost = async(member:Member):Promise<Post[]>=>{
    const articles = await parseRSSfeed(member.feedLink[0])
    const rss = articles[0]!
    const ogImageUrl = await getOgImagePath(rss.url)
    return [
        {
            title:rss.title,
            url:rss.url,
            publishedAt:rss.publishedAt,
            ogImageUrl:ogImageUrl,
            author:member.name
        }
    ]
}