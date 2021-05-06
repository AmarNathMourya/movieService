const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    default: Date.now
  },
  genres: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('movie', ItemSchema);
