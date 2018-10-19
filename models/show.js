const mongoose = require('mongoose');

const Show = mongoose.model('Show', {
  title: String,
  img: String,
  genre: String
});

module.exports = Show
