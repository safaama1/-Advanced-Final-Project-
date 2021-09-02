const UserModel = require('../models/User');
class UsersService {
	constructor() {}
	// add a new user
	async addUser(username, email, password) {
		return await UserModel.create({ username, email, password });
	}

	// find and return a user by username
	async findByName(username) {
		username = username.trim();
		return UserModel.findOne({ username });
	}

	// find and return a user by id
	async findById(id) {
		return UserModel.findById(id);
	}
	async addBill(userName,bill){
		//TODO fix method
		UserModel.updateOne(
			{ name: userName },
			{ $push: { bills:  bill } }
		);
	}
}
module.exports = new UsersService();