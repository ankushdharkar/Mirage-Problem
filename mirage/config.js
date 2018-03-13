export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
	// this.namespace = '/api';

  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

	//this.get('/homes');


	this.get('/homes', () => {
		return {
			"title": "My Ankush is great!"
		}
	}, {timing: 3000});

	// Crude way of doing things
	// this.get('/authors', () => {

	// 	return {
	// 		data: [
	// 			{
	// 				type: 'author',
	// 				id: 1,
	// 				"attributes": {
	// 					name: "Ankush"
	// 				}
	// 			},
	// 			{	type: 'author',
	// 				id: 2,
	// 				"attributes": {
	// 					name: "Sachin"
	// 				}
	// 			}
	// 		]
	// 	}
	// });

	this.get('/authors', (schema) => {
		return schema.authors.all();
	}, {timing: 4000} );

	this.passthrough();

}
