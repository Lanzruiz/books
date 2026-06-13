const  { gql } = require('graphql-tag');

module.exports = gql`
type Author {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  biography: String
  birthDate: String
  nationality: String
  books: [Book!]
  createdAt: String!
  updatedAt: String!
}

type Book {
  id: ID!
  title: String!
  isbn: String!
  publishedYear: Int
  author: Author!
}

input CreateAuthorInput {
  firstName: String!
  lastName: String!
  email: String!
  biography: String
  birthDate: String
  nationality: String
}

input UpdateAuthorInput {
  firstName: String
  lastName: String
  email: String
  biography: String
  birthDate: String
  nationality: String
}

type Query {
  authors: [Author!]!
  author(id: ID!): Author
}

type Mutation {
  createAuthor(input: CreateAuthorInput!): Author!
  updateAuthor(id: ID!, input: UpdateAuthorInput!): Author!
  deleteAuthor(id: ID!): Boolean!
}
`