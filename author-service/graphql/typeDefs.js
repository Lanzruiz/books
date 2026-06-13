const  { gql } = require('graphql-tag');

module.exports = gql`


type Book {
    title: String
    author: String

}

input BookInput {
    title: String
    author: String

}



extend type Query {
    book: [Book]

}

extend type Mutation {

    createBook(bookInput: BookInput): Book!


}
`