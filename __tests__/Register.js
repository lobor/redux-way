import Register from '../src/Register'
import Model from '../src/Model'

describe('Register', () => {
	it('must return api Register', () => {
		const register = new Register();
		expect(Array.isArray(register.models)).toEqual(true)
		expect(register.saga).toBe(false)
		expect(typeof register.register).toEqual('function')
		expect(typeof register.sagaMiddleware).toEqual('function')
		expect(typeof register.getState).toEqual('function')
	});

	it('must register one model', () => {
		const register = new Register();

		register.register(Model);

		expect(Array.isArray(register.models)).toBe(true)
		expect(register.models.length).toBe(1)
		expect(register.models[0] instanceof Model).toBe(true)
	});

	it('must register Two model', () => {
		const register = new Register();

		register.register(Model, Model);

		expect(Array.isArray(register.models)).toBe(true)
		expect(register.models.length).toBe(2)
		expect(register.models[0] instanceof Model).toBe(true)
	});

	it('must call run function of react-saga', () => {
		const sagaMiddleware = {run: jest.fn()};
		const register = new Register();
		class Test extends Model{
			run = function* () {}
		}
		register.register(Test);

		register.sagaMiddleware(sagaMiddleware)

		expect(sagaMiddleware.run).toHaveBeenCalledTimes(1)
	});

	it('must return complete store', () => {
		const sagaMiddleware = {run: jest.fn()};
		const register = new Register();
		class TestModel extends Model { static state = 0; static modelName = 'test'; }
		register.register(TestModel);

		expect(typeof register.getState).toEqual('function')
		expect(register.getState()).toEqual({test: 0})
	});
})