import React from 'react'
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty'
import extend from 'lodash/extend'

export const createReducer = (register) => 
	(state, action) => {
		register.models.forEach((model) => {
			for (let type in model.reducer) {
				if (type === action.type && typeof model.reducer[type] === 'function') {
					model.reducer[type](model.state, action, model);
				}
			}
		})
		return register.getState()
	}

export const connect = (state, actions = {}) => {
	return (Child) => {
		class WrappedComponent extends React.Component {
			static contextTypes = {
				store: PropTypes.object
			}

			constructor(props, context) {
				super(props, context);
				let setState = typeof state === 'function' ? state(this.context.store.getState()) : {};
				for (let name in actions) {
					setState[name] = (e, ...params) => {
						this.context.store.dispatch(actions[name](...params))
					};
				}
				console.log(setState, {toto:'titi', ...setState});
				this.state = { ...setState }
				console.log(this.state);
			}

			componentWillMount() {
				this.subscribe = this.context.store.subscribe(() => {
					let state = this.context.store.getState();
					let newState = {};
					for (let key in state) {
						if (this.state.hasOwnProperty(key) && JSON.stringify(this.state[key]) !== JSON.stringify(state[key])) {
							newState[key] = state[key]
						}
					}

					if (!isEmpty(newState)) {
						this.setState(newState);
					}
				})
			}

			componentWillUnmount() {
				this.subscribe.unsubscribe()
			}

			render() {
				return React.createElement(Child, {...this.state, ...this.props})
			}
		}

		return WrappedComponent;
	}
}