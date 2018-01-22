let genbind = require('generator-bind');

export default class Register {
	constructor() {
		this.models = [];
		this.saga = false;
	}

	register(...models) {
		models.forEach((model) => {
			let instance = new model({
				state: model.state,
				constants: model.constants,
				modelName: model.modelName
			})

			if (instance.run) {
				instance.run = genbind(instance, instance.run);
			}

			this.models.push(instance)
		})
	}

	sagaMiddleware(saga) {
		this.saga = saga;
		this.models.forEach((model) => {
			if (model.run) {
				this.saga.run(model.run);
			}
		});
	}

	getState() {
		let state = {};
		for(let index in this.models) {
			let model = this.models[index];
			state[model.modelName] = model.state;
		}
		return state;
	}
}