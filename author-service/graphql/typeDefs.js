const  { gql } = require('graphql-tag');

module.exports = gql`


type Author {
    fullname: String
    dateOfBirth: Date
    nationality: String
    biography: String

}

input AuthorInput {
    fullname: String
    dateOfBirth: Date
    nationality: String
    biography: String

}



extend type Query {
    author: [Author]

}

extend type Mutation {

    createAuthor(authorInput: AuthorInput): Author!


}
`