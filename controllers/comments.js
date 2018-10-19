const Comment = require('../models/comment.js')

function comments (app) {
    app.post('/shows/comments', (req, res) => {
        Comment.create(req.body).then(comment => {
            res.redirect(`/shows/${comment.showId}`)
        }).catch((err) => {
            console.log(err.message)
        })
    })
    app.delete('/shows/comments/:id', (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            res.redirect(`/shows/${comment.showId}`)
        }).catch((err) => {
            console.log(err.message)
        })
    })
}

module.exports = comments;
