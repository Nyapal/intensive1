const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comment = mongoose.model('Comment', {
  username: String,
  content: String,
  showId: { type: Schema.Types.ObjectId, ref: 'Show' }
});

module.exports = Comment
