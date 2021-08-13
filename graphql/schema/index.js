const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    createdAt: String!
		updatedAt: String!
  }

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

export default typeDefs