import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | edit reminder', {
  beforeEach: function() {
    server.createList('reminder', 1);
    visit('/')
    click('.spec-reminder-item:first')
    click('.edit-reminder-btn')
  }
});

test('navigating to /edit', function(assert) {

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit')
  })
})

test('renders form to edit reminder', function(assert) {

  andThen(function() {
    assert.equal(find('form').length, 1, 'should render a form element')
    assert.equal(find('input').length, 2, 'should render two inputs for name and date')
    assert.equal(find('textarea').length, 1, 'should render textarea for notes')
    assert.equal(find('.save-updates-btn').text(), 'Save', 'should render a button to save updates')
  })
})

test('updates value on save', function(assert) {
  fillIn('.new-reminder-title', 'Awesome Title')

  andThen(function() {
    assert.equal(find('.new-reminder-title').val(), 'Awesome Title', 'should accept new title input')
    click('.save-updates-btn')
    assert.equal(find('.spec-reminder-title').text(), 'Awesome Title', 'reminder on left menu should reflect new title')
  })
})

test('redirects from /edit after clicking save', function(assert) {
  fillIn('.new-reminder-title', 'Awesome Title')
  click('.save-updates-btn')

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1')
  })
})
