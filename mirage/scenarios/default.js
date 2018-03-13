export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('author', 10);


	// let author = server.create('author', {name: 'Zelda'});
	// server.createList('blog-post', 20, { author });

}
