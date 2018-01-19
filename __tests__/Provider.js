import React from 'react'
import ReactTestRenderer from 'react-test-renderer';
import Provider from '../src/Provider';

describe('Provider', () => {
	it('must ', () => {
		const store = {};
		const renderer = ReactTestRenderer.create(
			<Provider store={store}>
				<div></div>
			</Provider>
		).toJSON();

		expect(renderer).toMatchSnapshot();
		
	});
})