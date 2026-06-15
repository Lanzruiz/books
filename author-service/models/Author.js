const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    biography: {
      type: String
    },

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Author', authorSchema);