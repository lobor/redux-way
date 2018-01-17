export default class Register {
	constructor() {
        this.models = [];
	}

	register(...models) {
		models.forEach((model) => {
			this.models.push(new model({
				state: model.state,
				constants: model.constants,
				modelName: model.modelName
			}))
		})
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