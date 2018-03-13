import Route from '@ember/routing/route';

export default Route.extend({

	model(params) {

		let homeId = params.home_id;
		return this.store.findRecord('home', homeId);
	}
});
