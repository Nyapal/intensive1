const mongoose = require('mongoose');

const Show = mongoose.model('Show', {
  title: String,
  genre: String
});

module.exports = Show
