import React from 'react'
import renderer from 'react-test-renderer';

import Provider from '../src/Provider';

describe('Provider', () => {
	it('must ', () => {
		renderer.create(
			<Provider>
				<div></div>,
			</Provider>
		);
	});
})