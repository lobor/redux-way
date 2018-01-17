import React from 'react'
import {connect} from '../../';
import { UserModel } from '../models'

export class User extends React.Component {
	render() {
		return (
			<div>
				User name: {this.props.name}
				<button onClick={this.props.changeName}>Change name</button>
			</div>
		)
	}
}

let mapStateToProps = ({user}) => {
	return {name: user.name}
}
let actions = {
	changeName: UserModel.actions.changeName
}

export default connect(mapStateToProps, actions)(User);