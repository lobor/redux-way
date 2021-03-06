import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'

import Register from '../src/Register'
import {createReducer} from '../src/redux'

import {CounterModel, UserModel} from './models'

const sagaMiddleware = createSagaMiddleware()

const register = new Register();
register.register(CounterModel, UserModel)

const store = createStore(createReducer(register), applyMiddleware(sagaMiddleware));

register.sagaMiddleware(sagaMiddleware);

export default store
