import {rest} from 'msw'
import { mockedQiitaResponse } from './mockResponces'
import { mockedQiitaArticleResponse } from './mockResponces'
 
export const handlers = [
  // Describe what request to intercept...
  rest.get('https://qiita.com/PoPodada/feed',(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(mockedQiitaResponse),
    )
  }),
  rest.get('https://qiita.com/PoPodada/items/281f68e36abf927c70b4',(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(mockedQiitaArticleResponse),
    )
  })
]
