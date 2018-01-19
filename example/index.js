import React from 'react';
import ReactDom from 'react-dom'

import store from './store'
import { Provider } from '../'

import { Counter, User } from './components'


ReactDom.render(
	<Provider store={store}>
		<Counter />
		<User />
	</Provider>,
	document.getElementById('root')
)
