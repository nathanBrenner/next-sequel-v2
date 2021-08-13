const db = require('../../db/models/index')
import { userResolvers } from './user';

const resolvers = {
  Query: {
    ...userResolvers.queries
  },
  Mutation: {
    ...userResolvers.mutations
  }
};

export default resolvers;
