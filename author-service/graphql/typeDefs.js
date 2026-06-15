const  { gql } = require('graphql-tag');

module.exports = gql`
type Author {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  biography: String
  createdAt: String!
  updatedAt: String!
}

input CreateAuthorInput {
  firstName: String!
  lastName: String!
  email: String!
  biography: String
}

input UpdateAuthorInput {
  firstName: String
  lastName: String
  email: String
  biography: String
}

type Query {
  authors: [Author]
  author(id: ID!): Author
}

type Mutation {
  createAuthor(createAuthorInput: CreateAuthorInput!): Author!
  updateAuthor(id: ID!, input: UpdateAuthorInput!): Author!
  deleteAuthor(id: ID!): Boolean!
}
`