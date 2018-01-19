import {createReducer} from '../src/redux';
describe('redux', () => {
	it('must return functioon', () => {
		expect(typeof createReducer()).toBe('function')
	});
	
})