const db = require('../../db/models/index')
const Users = db.users;

export default function handler(req, res) {
	Users.findAll()
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({message: err})
	})
}