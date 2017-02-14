import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').peekRecord('reminder', params.reminder_id)
  }
});
