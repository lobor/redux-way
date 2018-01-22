import ReactTestRenderer from 'react-test-renderer';
import React from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'

import {createReducer, connect} from '../src/redux';

describe('redux', () => {
	describe('createRedux', () => {
		it('must be a function', () => {
			expect(typeof createReducer).toBe('function')
		});

		it('must return function', () => {
			expect(typeof createReducer()).toBe('function')
		});

		it('must return function', () => {
			const reducer = {
				getState: jest.fn(() => (1)),
				models: [{
					reducer:{'test': jest.fn(() => (1))},
					state: 5
				}]
			};
			const state = {};
			const action = {
				type: "test"
			};
			expect(createReducer(reducer)(state, action)).toBe(1)
			expect(reducer.models[0].reducer.test).toHaveBeenCalled()
			expect(reducer.getState).toHaveBeenCalled()
		});
	})
	
	describe('connect', () => {
		it('must be a function', () => {
			expect(typeof connect).toBe('function')
		});

		it('must return function', () => {
			expect(typeof connect()).toBe('function')
		});

		it('must return class extends by react', () => {
			const action = jest.fn();
			const reducer = jest.fn()
			const store = createStore(state=>state)

			class Provider extends React.Component {
				static childContextTypes = {
					store: PropTypes.object.isRequired
				}
			 
				static propTypes = {
					store: PropTypes.object.isRequired
				}
			 
				getChildContext() {
					return {store: this.props.store};
				}
			 
				render() {
					return this.props.children
				}
			}

			class Test extends React.Component{
				render(){return null}
			}
			const Component = connect(() => ({}), {action: action})(Test)

			const renderer = ReactTestRenderer.create(
				<Provider store={store}>
					<Component />
				</Provider>
			)
			
			const json = renderer.toJSON();
	
			store.dispatch({type:''});
			expect(json).toMatchSnapshot();
		});
	})
})