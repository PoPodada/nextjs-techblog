import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Describe what request to intercept...
  http.get('https://qiita.com/PoPodada/feed', () => {
   
  }),
]
