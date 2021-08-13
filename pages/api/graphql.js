import { ApolloServer } from 'apollo-server';
import typeDefs from '../../graphql/schema';
const resolvers = require('../../graphql/resolvers');
const models = require('../../graphql/models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

const serverStart = server.start()
export const GRAPHQL_PATH = '/api/graphql';
export default async function handler(req, res) {
	await serverStart;

	return server.createHandler({ path: GRAPHQL_PATH })(req, res);
}