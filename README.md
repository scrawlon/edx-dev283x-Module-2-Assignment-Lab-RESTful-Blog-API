# edx-dev283x-Module-2-Assignment-Lab-RESTful-Blog-API

## Clone and set up project

```
git clone git@github.com:scrawlon/edx-dev283x-Module-2-Assignment-Lab-RESTful-Blog-API.git
```
```
cd edx-dev283x-Module-2-Assignment-Lab-RESTful-Blog-API
```
```
npm install
```
```
npm start
```
---
## Test API with curl
1. Test 'addPost':
```
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"
```
2. Test 'updatePost':
```
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"
```
3. Test 'getPosts':
```
curl "http://localhost:3000/posts"
```
4. Test 'addComment':
```
curl -H "Content-Type: application/json" -X POST -d '{"text":"test comment"}' "http://localhost:3000/posts/0/comments"
```
5. Test 'updateComment':
```
curl -H 'Content-Type: application/json' -X PUT -d '{"text":"updated test comment"}' "http://localhost:3000/posts/0/comments/0"
```
6. Test 'getComments':
```
curl "http://localhost:3000/posts/0/comments"
```
7. Test 'deleteComment':
```
curl -X DELETE "http://localhost:3000/posts/0/comments/0"
```
4. Test 'removePost':
```
curl -X DELETE "http://localhost:3000/posts/0"
```
---
