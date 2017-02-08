import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return[{
      title: 'Reminder1',
      date: 'Date',
      notes: 'Notes',
      pinned: false,
    },
    {
      title: 'Reminder2',
      date: 'Date',
      notes: 'Notes',
      pinned: false,
    },
    {
      title: 'Reminder3',
      date: 'Date',
      notes: 'Notes',
      pinned: false,
    },
    {
      title: 'Reminder4',
      date: 'Date',
      notes: 'Notes',
      pinned: false,
    },
    {
      title: 'Reminder5',
      date: 'Date',
      notes: 'Notes',
      pinned: false,
    }]

  }
});
