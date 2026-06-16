const bookPublishResolvers = require('./bookpublish');



module.exports = {

    Query: {

        ...bookPublishResolvers.Query
    },
    Mutation: {
  
        ...bookPublishResolvers.Mutation
    },
};