import React from 'react';
import ReactDom from 'react-dom'
import { createStore } from "redux"

import { Register, createReducer, Provider } from '../'

import {CounterModel, UserModel} from './models'

import { Counter, User } from './components'

const register = new Register();
register.register(CounterModel, UserModel)

const store = createStore(createReducer(register));


ReactDom.render(
	<Provider store={store}>
		<Counter />
		<User />
	</Provider>,
	document.getElementById('root')
)

store.dispatch({type: 'SET_USER'})