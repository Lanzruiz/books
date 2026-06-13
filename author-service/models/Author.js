const { model, Schema } = require('mongoose')

// test
const AuthorSchema = new Schema({
    fullname: String,
    dateOfBirth: Date,
    nationality: String,
    biography: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model('Author', AuthorSchema);
