import React from 'react'
import PropTypes from 'prop-types'

export default class Provider extends React.Component {
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