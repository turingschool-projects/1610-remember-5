import Ember from 'ember';

export default Ember.Route.extend({



  model() {
    return this.get('store').findAll('reminder');
  },

  actions: {
    selectReminder() {
      console.log('fuck yea!')
    }
  }

});
