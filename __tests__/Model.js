import Model from '../src/Model'

let model;

describe('Model', () => {
	it('must not have error on create instance, and check function of class', () => {
		let model = new Model();
		expect(typeof model.update).toBe('function')
		expect(model.state).toBe(void 0)
		expect(model.constants).toBe(void 0)
		expect(model.modelName).toBe(void 0)
	});

	it('must update state with object', () => {
		let initState = {};
		let modifState = {toto: 'titi'};
		let model = new Model({state: initState});
		
		expect(model.state).toEqual(initState)
		model.update(modifState)
		expect(model.state).toEqual(modifState)
	});

	it('must update state with array', () => {
		let initState = [];
		let modifState = [5,4];
		let model = new Model({state: initState});
		
		expect(model.state).toEqual(initState)
		model.update(modifState)
		expect(model.state).toEqual(modifState)
	});

	it('must update state with other', () => {
		let initState = 4;
		let modifState = 5;
		let model = new Model({state: initState});
		
		expect(model.state).toEqual(initState)
		model.update(modifState)
		expect(model.state).toEqual(modifState)
	});

	it('must have function generator run ', () => {
		class Test extends Model{
			run = function* () {}
		}
		const model = new Test();
		expect(typeof model.run).toEqual('function')
		const run = model.run()
		expect(typeof run.next).toEqual('function')

		run.next();
		expect(run.value).toBe(void 0)
		expect(run.done).toBe(void 0)
		expect(run.next().done).toBe(true)
	})
})