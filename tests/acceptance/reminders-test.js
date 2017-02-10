/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(find('.spec-reminder-item').find('.spec-reminder-title').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});

test('message display when no notes are in storage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(find('.spec-reminder-item').length, 0, 'should not display any reminders if none exist');
    assert.equal(find('.no-reminder-message').length, 1, 'should display prompt to add reminders if none exist')
    assert.equal(find('.no-reminder-message').text(), 'Click below to add a new reminder.', 'should display prompt to add reminders if none exist')
  })
})
