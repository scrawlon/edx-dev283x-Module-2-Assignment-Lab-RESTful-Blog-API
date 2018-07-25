
let store = require('../store.js')

module.exports = {
  getComments(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false

    if ( post && post !== undefined ) {
      res.status(200).send(post.comments)
    } else {
      res.status(404).send({error: 'Invalid Post ID'})
    }
  },
  addComment(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false

    if ( post && post !== undefined ) {
      let commentId = post.comments.length
      let newComment = {
        text: req.body.text
      }

      post.comments.push(newComment)
      res.status(201).send({commentId: commentId})
    } else {
      res.status(404).send({error: 'Invalid Post ID'})
    }
  },
  updateComment(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false
    let comments = post ? post.comments : false
    let commentId = req.params.commentId

    if ( comments[commentId] !== undefined ) {
      comments[commentId] = {
        text: req.body.text
      }
      res.status(200).send(comments[commentId])
    } else {
      res.status(404).send({error: 'Invalid Comment ID'})
    }
  },
  removeComment(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false
    let comments = post ? post.comments : false
    let commentId = req.params.commentId

    if ( comments[commentId] !== undefined ) {
      comments.splice(commentId, 1)
      res.status(204).send()
    } else {
      res.status(404).send({error: 'Invalid Comment ID'})
    }
  }
}
