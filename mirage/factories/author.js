import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	indexedVal(i) {
		return i;
	},
	name() {
		return faker.name.findName();
	},
	age: 28,

  admin: false,

  avatar() {
    return faker.internet.avatar();
  }

});
