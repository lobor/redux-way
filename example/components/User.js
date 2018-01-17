import React from 'react'
import {connect} from '../../';

export class User extends React.Component {
	render() {
		return (
			<div>
				User name: {this.props.name}
			</div>
		)
	}
}

let mapStateToProps = ({user}) => {
	return user
}

export default connect(mapStateToProps)(User);