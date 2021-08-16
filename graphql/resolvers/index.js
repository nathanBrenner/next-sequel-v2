const db = require('../../db/models/index')
import { profileResolvers } from './profile';
import { userResolvers } from './user';

const resolvers = {
  Query: {
    ...userResolvers.queries,
    ...profileResolvers.queries
    
  },
  Mutation: {
    ...userResolvers.mutations, 
    ...profileResolvers.mutations,
  }
};

export default resolvers;
