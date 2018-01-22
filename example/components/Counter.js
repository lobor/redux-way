import React from 'react'

import { CounterModel } from '../models'
import {connect} from '../../src/redux';

export class Counter extends React.Component{
	render() {
		return (
			<div>
				{this.props.counter}<br />
				<button onClick={this.props.decrement}>Decrement</button>
				<button onClick={this.props.increment}>Incremente</button>
				<button onClick={this.props.reset}>reset</button>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return { counter: state.counter }
}

let mapDispatchToProps = {
	increment: CounterModel.actions.increment,
	decrement: CounterModel.actions.decrement,
	reset: CounterModel.actions.reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)