import { Model } from '../../'

export default class CounterModel extends Model {
	static modelName = 'counter'

	static state = 0

	static constants = {
		INCREMENT: 'INCREMENT',
		DECREMENT: 'DECREMENT',
		RESET: 'RESET'
	}

	static actions = {
		increment: () => ({type: CounterModel.constants.INCREMENT}),
		decrement: () => ({type: CounterModel.constants.DECREMENT}),
		reset: () => ({type: CounterModel.constants.RESET}),
	}

	reducer = {
		[CounterModel.constants.INCREMENT]: (state, action, model) => {model.update(state + 1)},
		[CounterModel.constants.DECREMENT]: (state, action, model) => {model.update(state - 1)},
		[CounterModel.constants.RESET]: (state, action, model) => {model.update(0)}
	}
}