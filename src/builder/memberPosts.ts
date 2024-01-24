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
            title:item.title,
            url:item.link,
            publishedAt:item.isoDate,
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
    return [
        {
            title:'自分のサイトをmysqlと紐づける',
            url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
            publishedAt:'2024-01-17T06:17:21.000Z',
            ogImageUrl:'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58',
            author:member.name
        }
    ]
}