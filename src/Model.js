export default class Model {
	constructor({ state, constants, modelName }) {
		this.state = {};
		if (state instanceof Object || state instanceof Array) {
			for (let name in state) {
				Object.defineProperty(this.state, name, { value: state[name]});
			}
		} else {
			this.state = state;
		}

		this.constants = constants;
		this.modelName = modelName;
	}

	findById(id) {

	}

	update (state) {
		if (this.state instanceof Object) {
			this.state = { ...this.state, ...state }
		} else if (this.state instanceof Array) {
			this.state = [...this.state, ...state]
		} else {
			this.state = state;
		}
	}

	create () {

	}

	remove () {

	}


}