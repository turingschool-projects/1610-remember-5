import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    updateReminder() {
      this.get('store').findRecord('reminder', this.model.id).then(reminder => {
        reminder.save();
      })
    },
    undoChanges() {
      this.get('store').findRecord('reminder', this.model.id).then(reminder => {
        reminder.rollbackAttributes();
      })
    }
  }
});
