const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!,
    createdAt: String!
		updatedAt: String!
    profile: Profile
  }

  type Profile {
    id: Int!
    userId: Int!
    github_handle: String!
  }

  type Query {
    user(id: Int!): User
    users: [User!]!
    profile(userId: Int!): Profile!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
    createProfile(userId: Int!, github: String!): Profile!
    updateProfile(userId: Int!, github: String!): Profile!
  }
`;

export default typeDefs