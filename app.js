const express = require('express')
const app = express()
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

let shows = [
  { title: "Shameless", genre: "Comedy" },
  { title: "Game of Thrones", genre: "Drama" }
]

app.get('/', (req, res) => {
  res.render('shows-index', { shows: shows });
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
