
import { title } from "process"
import { parseRSSfeed } from "../memberPosts"
import { server } from "../../mocks/server"



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
            }])
        })
    })
    
})