export default class Model {
	constructor ({state, constants, modelName} = {}) {
		this.state = state;
		this.modelName = modelName;

		Model.self = () => (this);
	}

	update (state) {
		if (this.state instanceof Object && !Array.isArray(this.state)) {
			this.state = { ...this.state, ...state }
		} else {
			this.state = state;
		}
	}

	run = function* (){}
}