
import { title } from "process"
import { Member, parseRSSfeed } from "../memberPosts"
import { server } from "../../mocks/server"
import { getOgImagePath } from "../memberPosts"
import { getmemberpost } from "../memberPosts"
import { getmemberspost } from "../memberPosts"




describe("membersPost",()=>{
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    describe("parseRSSFEED",()=>{
        test("フィードのURLをパースする",async()=>{
            const results = await parseRSSfeed('https://qiita.com/PoPodada/feed')
    
            expect(results).toEqual([{
                title:'自分のサイトをmysqlと紐づける',
                url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
                publishedAt:'2024-01-17T06:17:21.000Z'
            }])
        })
    })
    describe("getOgImagePath",()=>{
        test("OG画像のURLの取得",async()=>{
            const results = await getOgImagePath('https://qiita.com/PoPodada/items/281f68e36abf927c70b4')
    
            expect(results).toBe('https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58')
        })
    })
    describe("getmemberpost",()=>{
        test("フィードのURLをパースする",async()=>{
            const member:Member = {name:'PoPodada',feedLink:['https://qiita.com/PoPodada/feed','https://qiita.com/PoPodada/feed']}
            const results = await getmemberpost(member)
    
            expect(results).toEqual([{
                title:'自分のサイトをmysqlと紐づける',
                url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
                publishedAt:'2024-01-17T06:17:21.000Z',
                ogImageUrl:'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58',
                author:member.name
            },
            {
                title:'自分のサイトをmysqlと紐づける',
                url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
                publishedAt:'2024-01-17T06:17:21.000Z',
                ogImageUrl:'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58',
                author:member.name
            }])
        })
    })

    describe("getmemberspost",() =>{
        test("複数メンバーの記事を取得する",async()=>{
            const members:Member[] = [
                {name:'PoPodada0',feedLink:[
                'https://qiita.com/PoPodada/feed',
                'https://qiita.com/PoPodada/feed',
            ]},
            {name:'PoPodada1',feedLink:[
                'https://qiita.com/PoPodada/feed',
                'https://qiita.com/PoPodada/feed',
            ]},

        ]
        const results = await getmemberspost(members)
    
            expect(results).toEqual([
                {
                title:'自分のサイトをmysqlと紐づける',
                url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
                publishedAt:'2024-01-17T06:17:21.000Z',
                ogImageUrl:'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58',
                author:members[0].name
            },
            {
                title:'自分のサイトをmysqlと紐づける',
                url:'https://qiita.com/PoPodada/items/281f68e36abf927c70b4',
                publishedAt:'2024-01-17T06:17:21.000Z',
                ogImageUrl:'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9JUU4JTg3JUFBJUU1JTg4JTg2JUUzJTgxJUFFJUUzJTgyJUI1JUUzJTgyJUE0JUUzJTgzJTg4JUUzJTgyJTkybXlzcWwlRTMlODElQTglRTclQjQlOTAlRTMlODElQTUlRTMlODElOTElRTMlODIlOEImdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtY2xpcD1lbGxpcHNpcyZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWFlOWZlMDRlZmJjZDhiYTBlYzBmY2JhMTZjZTQyZWMy&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwUG9Qb2RhZGEmdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPTYxOTU0ODM3NWQ5NDNhOTA4OTNjZWFmZjBjZjZhNTcy&blend-x=142&blend-y=491&blend-mode=normal&s=f898c81a2c777ba68a931c29340c5f58',
                author:members[0].name
                /* なにを四天王 */
            }]
            )
        })
    })
    
})
