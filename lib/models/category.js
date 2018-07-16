const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: 'The name is required'
    },
    budget: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Category', schema);