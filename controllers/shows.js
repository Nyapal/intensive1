const Show = require('../models/show.js')
function shows (app) {

    // INDEX
    app.get('/', (req, res) => {
        Show.find()
        .then(shows => {
            res.render('shows-index', { shows: shows });    })

    })
    // NEW
    app.get('/shows/new', (req, res) => {
        res.render('shows-new', {})
    })
    // CREATE
    app.post('/shows', (req, res) => {
      Show.create(req.body).then((show) => {
          res.redirect(`/shows/${show._id}`)
      }).catch((err) => {
          console.log(err.message)
      })
    })
    // SHOW
    app.get('/shows/:id', (req, res) => {
        Show.findById(req.params.id).then((show) => {
            res.render('shows-show', {show: show})
        }).catch((err) => {
            console.log(err.message)
        })
    })
    // EDIT
    app.get('/shows/:id/edit', (req, res) => {
      Show.findById(req.params.id, function(err, show) {
        res.render('shows-edit', {show: show});
      })
    })
    // UPDATE
    app.put('/shows/:id', (req, res) => {
        Show.findByIdAndUpdate(req.params.id, req.body)
            .then(show => {
                res.redirect(`/shows/${show._id}`)
            }).catch(err => {
                console.log(err.message)
            })
    })
    // DESTROY
    app.delete('/shows/:id', (req, res) => {
        Show.findByIdAndRemove(req.params.id).then((show) => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err.message)
        })
    })

}

module.exports = shows;
