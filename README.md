# redux-way
A small, simple and immutable model to manage data in your Redux store.

## Motivation
After multiple project with react and redux, the file structure begin unmaintainable, constants on one side, reducers on another. I tried to put everything in a file but I end up with a large file.
So I created for my needs, a bookstore allowing me to have maintainable and clear code
I was inspired by react-redux and react-ORM

## Installation
```bash
npm install --save redux-way
```

## Usage
### Declare your model
```javascript
import { Model } from 'redux-way';

export default class CounterModel extends Model {
	// Used to resolve all related store 
	static modelName = 'counter';

	// Initial state
	static state = 0;

	// Constants related to the model
	static constants = {
		INCREMENT: 'INCREMENT',
		DECREMENT: 'DECREMENT',
		RESET: 'RESET'
	};

	// Differents actions related to the model
	static actions = {
		increment: () => ({type: CounterModel.constants.INCREMENT}),
		decrement: () => ({type: CounterModel.constants.DECREMENT}),
		reset: () => ({type: CounterModel.constants.RESET})
	};

	// Reducer linked by constants
	reducer = {
		[CounterModel.constants.INCREMENT]: (state, action, model) => {model.update(state + 1)},
		[CounterModel.constants.DECREMENT]: (state, action, model) => {model.update(state - 1)},
		[CounterModel.constants.RESET]: (state, action, model) => {model.update(0)}
	};
}
```

### Register your model and create store
```javascript
import { createStore } from 'redux';
import { Register } from 'redux-way';
import { CounterModel } from './model';

const register = new Register();
// Register yout models
register.register(CounterModel);

const store = createStore(createReducer(register));
```

### Connect your composant
```javascript
import React from 'react';

import { CounterModel } from './models';
import { connect } from 'redux-way';

export class Counter extends React.Component{
	render() {
		const { counter, decrement, increment, reset } = this.props;
		return (
			<div>
				{counter}
				<br />
				<button onClick={decrement}>Decrement</button>
				<button onClick={increment}>Incremente</button>
				<button onClick={reset}>Reset</button>
			</div>
		)
	}
}

// Same api as react-redux
const mapStateToProps = (state) => {
	return { counter: state.counter }
}

const mapDispatchToProps = {
	increment: CounterModel.actions.increment,
	decrement: CounterModel.actions.decrement,
	reset: CounterModel.actions.reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

## Api
### Model
- `update(mergeObj)`: update the state by merging mergeObj. Returns undefined
