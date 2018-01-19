import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'
import { Model } from '../../'

export const SET_USER = 'SET_USER';
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';

export default class UserModel extends Model {
	static modelName = 'user'

	static state = {
		name: 'foo'
	}

	static actions = {
		changeName: function () {
			return {type: SET_USER}
		}
	}

	run = function* () {
		yield takeEvery(SET_USER, UserModel.self().changeName)
	}

	changeName = function* () {
		yield delay(1000);
		yield put({type: SET_USER_SUCCESS})
	}

	reducer = {
		[SET_USER_SUCCESS]: function (state, action, model) {
			model.update({ name: 'bar' })
		},
	}
}