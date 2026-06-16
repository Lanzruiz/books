const BookPublish = require('../../models/BookPublish');

module.exports = {
    Mutation: {
        async updateBookPublish(_, { id }) {
            try {
                const book = await BookPublish.findByIdAndUpdate(
                    id,
                    { status: true, updatedAt: new Date() },
                    { new: true }
                );

                if (!book) {
                    throw new Error("Book not found");
                }

                return book;
            } catch (error) {
                throw new Error(`Failed to update book: ${error.message}`);
            }
        },
        async createBookPublish(_, { createBookPublishInput: { title, isbn, description, author, bookId } }) {
            try {
                const existingBook = await BookPublish.findOne({
                    isbn: isbn,
                });

                if (existingBook) {
                    throw new Error("Book with this ISBN already exists");
                }

                const book = new BookPublish({
                    bookId: bookId,
                    title: title,
                    isbn: isbn,
                    author: author,
                    description: description,
                    createdAt: new Date()
                });

                const savedBook = await book.save();

                return {
                    id: savedBook._id,
                    ...savedBook.toObject(),
                };
            } catch (error) {
                throw new Error(`Failed to create book: ${error.message}`);
            }
        }
    },

    Query: {

        async publishedBooks() {
            return await BookPublish.find().sort({ createdAt: -1 });
        },

        async publishedBook(_, { id }) {
            return await BookPublish.findById(id);
        }
    }
}


