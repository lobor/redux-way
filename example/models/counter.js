import Model from '../../src/Model'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export default class CounterModel extends Model {
	static modelName = 'counter'

	static state = 0

	static constants = {
		INCREMENT: 'INCREMENT',
		DECREMENT: 'DECREMENT',
		RESET: 'RESET'
	}

	static actions = {
		increment: () => ({type: INCREMENT}),
		decrement: () => ({type: DECREMENT}),
		reset: () => ({type: RESET}),
	}

	reducer = {
		[INCREMENT]: (state, action, model) => {model.update(state + 1)},
		[DECREMENT]: (state, action, model) => {model.update(state - 1)},
		[RESET]: (state, action, model) => {model.update(0)}
	}
}