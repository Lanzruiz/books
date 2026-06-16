const  { gql } = require('graphql-tag');

module.exports = gql`

type BookPublish {
  title: String!
  isbn: String!
  author: String!
  bookId: String!
  description: String!
  publicationDate: String
  status: Boolean!
}

input CreateBookPublishInput {
  title: String!
  bookId: String!
  author: String!
  isbn: String!
  description: String!
}

input UpdateBookPublishInput {
  title: String
  isbn: String
  bookId: String
  description: String
  publicationDate: String
  status: Boolean
}

type Query {

  publishedBooks: [BookPublish!]!
  publishedBook(id: ID!): BookPublish

}

type Mutation {
  createBookPublish(createBookPublishInput: CreateBookPublishInput!): BookPublish!
  updateBookPublish(id: ID!): BookPublish!
  deleteBookPublish(id: ID!): Boolean!
 
}
`