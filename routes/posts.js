
let store = require('../store.js')
store.posts = []

module.exports = {
  getPosts: function(req, res) {
    res.status(200).send(store.posts)
  },
  addPost(req, res) {
    let newPost = {
      name: req.body.name,
      url: req.body.url,
      text: req.body.text,
      comments: []
    }
    let id = store.posts.length
    store.posts.push(newPost)
    res.status(201).send({id: id})
  },
  updatePost(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false

    if ( post && post !== undefined ) {
      let updatedPost = {
        name: req.body.name,
        url: req.body.url,
        text: req.body.text,
        comments: post.comments
      }
      store.posts[postId] = updatedPost
      res.status(200).send(store.posts[postId])
    } else {
      res.status(404).send({error: 'Invalid Post ID'})
    }
  },
  removePost(req, res) {
    let postId = req.params.id
    let post = store.posts.length >= postId ? store.posts[postId] : false
    let comments = post ? post.comments : false

    if ( post && post !== undefined ) {
      store.posts.splice(req.params.id, 1)
      res.status(204).send()
    } else {
      res.status(404).send({error: 'Invalid Post ID'})
    }
  }
}
