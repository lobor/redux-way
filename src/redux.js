import React from 'react'

export const createReducer = (register) => 
	(state, action) => {
		register.models.forEach((model) => {
			model.reducer(model.state, action, model)
		})
		return register.getState()
	}

export const connect = (state = {}, actions = {}) => {
	return (Child) => {
		class WrappedComponent extends React.Component {
			render() {
				console.log(Child);
				return React.cloneElement(Child)
			}
		}

		return WrappedComponent;
	}
}