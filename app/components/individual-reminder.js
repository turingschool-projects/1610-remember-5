import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  

  actions: {
    toggleEdit() {
      this.get('store').findRecord('reminder', this.model.id).then(reminder => {
        reminder.set('editable', true)
      })
    },
    updateReminder() {
      this.get('store').findRecord('reminder', this.model.id).then(reminder => {
        reminder.save()
      })
    }
  }
});
