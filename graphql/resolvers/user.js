export const userResolvers = {
	queries: {
		async user(root, { id }, { models }) {
			return models.User.findById(id);
		},
		async users(root, args, {models}) {
			return models.users.findAll();
		}
	},
	mutations: {
		async createUser(root, { firstName, email, lastName, }, { models }) {
			return models.users.create({
				firstName,
				lastName,
				email,
			});
		}
	}
}







