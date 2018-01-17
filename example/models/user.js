import { Model } from '../../'

export default class UserModel extends Model {
	static modelName = 'user'

	static state = {
		name: 'foo'
	}

	static constants = {
		SET_USER: 'SET_USER'
	}

	static actions = {
		changeName: function () {
			return {type: UserModel.constants.SET_USER}
		}
	}

	reducer = {
		[UserModel.constants.SET_USER]: function (state, action, model) {
			model.update({ name: 'bar' })
		},
	}
}