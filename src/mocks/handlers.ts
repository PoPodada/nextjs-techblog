import {rest} from 'msw'
import { mockedQiitaResponse } from './mockResponces'
 
export const handlers = [
  // Describe what request to intercept...
  rest.get('https://qiita.com/PoPodada/feed',(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(mockedQiitaResponse),
    )
  }),
]
