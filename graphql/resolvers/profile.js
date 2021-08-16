
export const profileResolvers = {
	queries: {
		async profile(root, { userId }, { models }) {
			return models.profile.findOne({where: { userId }})
		}
	},
	mutations: {
		async createProfile(root, { userId, github }, { models }) {
			return models.profile.create({ userId, github_handle: github })
		},
		async updateProfile(root, { github, id }, { models }) {
			return models.profile.update({ github_handle: github }, { where: { id }})
		}
	}
}