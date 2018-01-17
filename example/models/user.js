import { Model } from '../../'

export default class UserModel extends Model {
	static modelName = 'user'

	static state = {
		name: 'toto'
	}

	static constants = {
		SET_USER: 'SET_USER'
	}

	reducer = {
		[UserModel.constants.SET_USER]: function (state, action, model) {
			model.update({ name: 'lionel' })
		},
	}
}