const Book = require('../../models/Book');

module.exports = {
    Mutation: {
        async createBook(_, {bookInput: {title, author, publicationYear} }) {
            const newBook = new Book({
                title: title,
                author: author,
                createdAt: new Date().toISOString()
            
            });

            const res = await newBook.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },

    Query: {
        
        async book() {
            return await Book.find().sort({});
            
        }
    }
}