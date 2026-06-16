const mongoose = require('mongoose');

const bookPublishSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    bookId: {
        type: String,
        required: true,
        unique: true
    },
    isbn: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    description: {
      type: String
    },
    publicationDate: {
      type: Date,
      default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    }

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('BookPublish', bookPublishSchema);