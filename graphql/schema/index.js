const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!,
    createdAt: String!
		updatedAt: String!
  }

  type Query {
    user(id: Int!): User
    users: [User!]!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
  }
`;

export default typeDefs