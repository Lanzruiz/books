const Author = require('../../models/Author');

module.exports = {
    Mutation: {
        async createAuthor(_, {authorInput: {fullname, dateOfBirth, nationality, biography} }) {
            const newAuthor = new Author({
                fullname: fullname,
                dateOfBirth: dateOfBirth,
                nationality: nationality,
                biography: biography,
                createdAt: new Date().toISOString()
            });

            const res = await newAuthor.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },

    Query: {

        async author() {
            return await Author.find().sort({});

        }
    }
}
