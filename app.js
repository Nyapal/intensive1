const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/kiki');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

const Show = mongoose.model('Show', {
  title: String,
  genre: String
});

let shows = [
  { title: "Shameless", genre: "Comedy" },
  { title: "Game of Thrones", genre: "Drama" },
  { title: "The Real Housewives of Atlanta", genre: ["Comedy", " Reality-TV"] },
  { title: "RuPaul's Drag Race", genre: "Reality TV"}
]

app.get('/', (req, res) => {
    Show.find()
    .then(shows => {
        res.render('shows-index', { shows: shows });    })

})

app.get('/shows/new', (req, res) => {
    res.render('shows-new', {})
})

app.post('/shows', (req, res) => {
  Show.create(req.body).then((show) => {
      res.redirect(`/shows/${show._id}`)
  }).catch((err) => {
      console.log(err.message)
  })
})

app.get('/shows/:id', (req, res) => {
    Show.findById(req.params.id).then((show) => {
        res.render('shows-show', {show: show})
    }).catch((err) => {
        console.log(err.message)
    })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
