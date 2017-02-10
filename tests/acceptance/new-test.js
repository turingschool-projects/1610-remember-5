import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new');

test('visiting /reminders/new', function(assert) {
  visit('reminders/new');

  andThen(function() {
    assert.equal(currentURL(), 'reminders/new');
    assert.equal(Ember.$('.add-new-reminder').length, 1, 'Renders one new-reminder form');
  });
});
