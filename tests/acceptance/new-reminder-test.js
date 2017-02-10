import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new reminder');

test('visiting /reminders/new', function(assert) {
  visit('reminders/new');

  andThen(function() {
    assert.equal(currentURL(), 'reminders/new');
    assert.equal(find('input').length, 2, 'should have two input fields for title and d');
    assert.equal(find('textarea').length, 1, 'shout have a text area for notes');
    assert.equal(find('.add-reminder-btn').length, 1, 'should have a button');
  });
});

test('should add a new reminder', function(assert) {
  visit('reminders/new');

  andThen(function() {
    fillIn('.new-reminder-title', 'Tell black bear his fly is unzipped');
    fillIn('.new-reminder-date', '2017-02-10');
    fillIn('.new-reminder-notes', 'He is embarrassing himself infront of everyone');

    click('.add-reminder-btn');

    andThen(function() {
      assert.equal(currentURL(), 'reminders/new');
      assert.equal(find('.spec-reminder-title').length, 1, 'should return a title field for new reminder')
      assert.equal(find('.spec-reminder-date').length, 1, 'should return a date field for new reminder')
      assert.equal(find('.spec-reminder-notes').length, 1, 'should return a notes field for new reminder')

      assert.equal(find('.spec-reminder-title').text(), 'Tell black bear his fly is unzipped', 'should show correct title for new reminder')
      assert.equal(find('.spec-reminder-date').text(), '2017-02-10', 'should show correct date for new reminder')
      assert.equal(find('.spec-reminder-notes').text(), 'He is embarrassing himself infront of everyone', 'should show correct notes for new reminder')
    })
  });
});
