const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Show = mongoose.model('Show', {
  title: String,
  genre: String
});

module.exports = Show
