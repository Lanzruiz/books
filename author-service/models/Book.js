const { model, Schema } = require('mongoose')

// test
const BookSchema = new Schema({
    title: String,
    author: String,
    publicationYear: Number,
     createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model('Book', BookSchema);
