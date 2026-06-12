
const bookResolvers = require('./book');



module.exports = {

    Query: {

        ...bookResolvers.Query
    },
    Mutation: {
  
        ...bookResolvers.Mutation
    },
};