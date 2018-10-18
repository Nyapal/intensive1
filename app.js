const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kiki');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

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

// app.get('/', (req, res) => {
//   Review.find()
//     .then(reviews => {
//         res.render('reviews-index', { reviews: reviews });
//     })
//     .catch(err => {
//       console.log(err);
//     })
// })

app.get('/', (req, res) => {
    Show.find()
    .then(shows => {
        res.render('shows-index', { shows: shows });
    })

})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
