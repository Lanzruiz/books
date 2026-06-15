
const authorResolvers = require('./author');



module.exports = {

    Query: {

        ...authorResolvers.Query
    },
    Mutation: {
  
        ...authorResolvers.Mutation
    },
};