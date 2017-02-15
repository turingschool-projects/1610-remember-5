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

test('toggle Undo button', function(assert) {
  assert.equal(find('.undo-updates-btn').length, 0, 'does not render undo button if no changes are made')
  fillIn('.new-reminder-title')
  andThen(function() {
    assert.equal(find('.undo-updates-btn').length, 1, 'renders undo button if changes have been made')
  })
})

test('redirects from /edit after clicking save', function(assert) {
  fillIn('.new-reminder-title', 'Awesome Title')
  click('.save-updates-btn')

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1')
  })
})

test('reverts to saved changes when revert button clicked', function(assert) {
  let initialTitle = find('.new-reminder-title').val()
  fillIn('.new-reminder-title', 'Awesome Title')

  andThen(function() {
    assert.equal(find('.new-reminder-title').val(), 'Awesome Title', 'should accept new title input')
  })
  click('.undo-updates-btn')
  andThen(function() {
    assert.equal(find('.new-reminder-title').val(), initialTitle, 'should revert to initial title')
  })
})

test('tay-tay class toggles when reminder has dirty data', function(assert) {
  fillIn('.new-reminder-title', 'Awesome Title')

  andThen(function() {
    assert.equal(find('.tay-tay').length, 1, 'should have tay-tay class when dirty data exists')
  })
  click('.undo-updates-btn')

  andThen(function() {
    assert.equal(find('.tay-tay').length, 0, 'should no longer have tay-tay class when dirty data exists')
  })
})

test('delete button functionality', function(assert) {
  assert.equal(currentURL(), '/reminders/1/edit')
  assert.equal(find('.spec-reminder-item').length, 1, 'assert that the reminder exists on the dom')
  click('.delete-reminder-btn')
  andThen(function() {
    assert.equal(currentURL(), '/reminders', 'delete button should redirect to /reminders route')
    assert.equal(find('.spec-reminder-item').length, 0, 'should not feature reminder on main reminder list')
  })


})
