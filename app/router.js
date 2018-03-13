import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('homes');
  this.route('homes', {'path': '/homes/:home_id'});
  this.route('author');
  this.route('authors');
});

export default Router;
