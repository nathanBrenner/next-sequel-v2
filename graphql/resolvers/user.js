export const userResolvers = {
	queries: {
		async user(root, { id }, { models }) {
			return models.user.findById(id);
		},
		async users(root, args, {models}) {
			return models.user.findAll();
		}
	},
	mutations: {
		async createUser(root, { firstName, email, lastName, }, { models }) {
			return await models.user.create({
				firstName,
				lastName,
				email,
			}).then(async createdUser => {
				return await models.profile.create({userId: createdUser.id})
			});
		}
	}
}







