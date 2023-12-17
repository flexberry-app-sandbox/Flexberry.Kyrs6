import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyrs6-билетная-касса-l');
  this.route('i-i-s-kyrs6-билетная-касса-e',
  { path: 'i-i-s-kyrs6-билетная-касса-e/:id' });
  this.route('i-i-s-kyrs6-билетная-касса-e.new',
  { path: 'i-i-s-kyrs6-билетная-касса-e/new' });
  this.route('i-i-s-kyrs6-возврат-билета-l');
  this.route('i-i-s-kyrs6-возврат-билета-e',
  { path: 'i-i-s-kyrs6-возврат-билета-e/:id' });
  this.route('i-i-s-kyrs6-возврат-билета-e.new',
  { path: 'i-i-s-kyrs6-возврат-билета-e/new' });
  this.route('i-i-s-kyrs6-оплата-билета-l');
  this.route('i-i-s-kyrs6-оплата-билета-e',
  { path: 'i-i-s-kyrs6-оплата-билета-e/:id' });
  this.route('i-i-s-kyrs6-оплата-билета-e.new',
  { path: 'i-i-s-kyrs6-оплата-билета-e/new' });
  this.route('i-i-s-kyrs6-перевозчик-l');
  this.route('i-i-s-kyrs6-перевозчик-e',
  { path: 'i-i-s-kyrs6-перевозчик-e/:id' });
  this.route('i-i-s-kyrs6-перевозчик-e.new',
  { path: 'i-i-s-kyrs6-перевозчик-e/new' });
  this.route('i-i-s-kyrs6-покупатель-l');
  this.route('i-i-s-kyrs6-покупатель-e',
  { path: 'i-i-s-kyrs6-покупатель-e/:id' });
  this.route('i-i-s-kyrs6-покупатель-e.new',
  { path: 'i-i-s-kyrs6-покупатель-e/new' });
  this.route('i-i-s-kyrs6-покупка-билета-l');
  this.route('i-i-s-kyrs6-покупка-билета-e',
  { path: 'i-i-s-kyrs6-покупка-билета-e/:id' });
  this.route('i-i-s-kyrs6-покупка-билета-e.new',
  { path: 'i-i-s-kyrs6-покупка-билета-e/new' });
});

export default Router;
