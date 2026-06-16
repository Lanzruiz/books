const Author = require('../../models/Author');
const { publishAuthor } = require('../../kafka/producer');

module.exports = {
    Mutation: {
        async createAuthor(_, { createAuthorInput: { biography, firstName, lastName, email } }) {
            try {
                const existingAuthor = await Author.findOne({
                    email: email,
                });

                if (existingAuthor) {
                    throw new Error("Author with this email already exists");
                }

                const author = new Author({
        
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    biography: biography,

                });

                const savedAuthor = await author.save();

                publishAuthor(savedAuthor);

                return {
                    id: savedAuthor._id,
                    ...savedAuthor.toObject(),
                };
            } catch (error) {
                throw new Error(`Failed to create author: ${error.message}`);
            }
        }
    },

    Query: {

        async authors() {
            return await Author.find().sort({});

        }
    }
}
