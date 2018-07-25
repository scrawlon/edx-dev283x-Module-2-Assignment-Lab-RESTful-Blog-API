const { posts, comments } = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

/* Posts */
app.get('/posts', posts.getPosts)
app.post('/posts', posts.addPost)
app.put('/posts/:id', posts.updatePost)
app.delete('/posts/:id', posts.removePost)

/* Post Comments */
app.get('/posts/:id/comments', comments.getComments)
app.post('/posts/:id/comments', comments.addComment)
app.put('/posts/:id/comments/:commentId', comments.updateComment)
app.delete('/posts/:id/comments/:commentId', comments.removeComment)

app.listen(3000)
