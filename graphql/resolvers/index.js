const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async users(root, args, { models }) {
      return models.User.findAll();
    },
  },
};

module.exports = resolvers;
