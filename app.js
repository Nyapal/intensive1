const express = require('express')
const methodOverride = require('method-override')
const app = express()
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shows = require('./controllers/shows')
const comments = require('./controllers/comments')
const Comment = require('./models/comment.js')
const Show = require('./models/show.js')

mongoose.connect('mongodb://localhost/kiki');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

shows(app)
comments(app)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
