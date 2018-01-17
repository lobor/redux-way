import React from 'react';
import ReactDom from 'react-dom'
import { createStore } from "redux"

import { Model, Register, createReducer, connect } from '../'

class Counter extends Model {
	static modelName = 'counter'

	static constants = {
		INCREMENT: 'INCREMENT',
		DECREMENT: 'DECREMENT'
	}

	static state = 0

	reducer(state, action, model) {
		switch (action.type) {
			case this.constants.INCREMENT:
				model.update(state + 1)
				break;
			case this.constants.DECREMENT:
				model.update(state - 1)
				break;
		}
		return void 0
	}
}

const register = new Register();
register.register(Counter)
const store = createStore(createReducer(register));

store.dispatch({type: 'INCREMENT'})

class App extends React.Component{
	componentWillMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				{store.getState().counter}
				<button onClick={()=>store.dispatch({type: 'INCREMENT'})}>Incremente</button>
			</div>
		)
	}
}

const AppConnected = connect()(App)

console.log(AppConnected);

ReactDom.render(
	<AppConnected />,
	document.getElementById('root')
)