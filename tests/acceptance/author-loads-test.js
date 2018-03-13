/* global server */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | authors loads', function(hooks) {
	setupApplicationTest(hooks);


	test('IAuthors are true true', function(assert) {
		// server.createList('author', 3);

		assert.equal(true, true);

		// await visit('/authors');

		// andThen(() => {
		// 	equal(find('li').length, 3);
		// 	equal(find('li:first').text(), authors[0].name);
		// });
	});


	test('visiting route named author', async function(assert) {
		
		// server.logging = true;
		server.createList('author', 3);

		await visit('/');

		assert.equal(currentURL(), '/');
	});


});
