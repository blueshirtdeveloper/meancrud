const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  mvi_id: {
    type: Number
  },
  mvi_name: {
    type: String
  },
  mvi_type: {
    type: String
  },
  mvi_favorites: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);