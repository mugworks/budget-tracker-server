const mongoose = require ( 'mongoose' );
const Schema = mongoose.Schema;

const Schema = new Schema({
  name: {
    type: string,
    required: true
  }
});

module.exports = mongoose.model('Category', schema);