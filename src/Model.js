let genbind = require('generator-bind');

export default class Model {
	constructor ({state, constants, modelName} = {}) {
		this.state = state;
		this.modelName = modelName;
		if (this.run) {
			this.run = genbind(this, this.run);
		}
	}

	update (state) {
		if (this.state instanceof Object && !Array.isArray(this.state)) {
			this.state = { ...this.state, ...state }
		} else {
			this.state = state;
		}
	}
}
