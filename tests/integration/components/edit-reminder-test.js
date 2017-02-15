import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-reminder', 'Integration | Component | edit reminder', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{edit-reminder}}`);
  assert.equal(Ember.$('.edit-reminder-form').length, 1, 'should render a form' )
});

test('renders data from its model prop', function(assert) {
  this.set('model', { title: 'a briliant title', date: '2017-02-13', notes: 'ok the title kind of sucks'})

  this.render(hbs`{{edit-reminder model=model}}`)

  assert.equal(this.$('.new-reminder-title').val(), 'a briliant title')
  assert.equal(this.$('.new-reminder-date').val(), '2017-02-13')
  assert.equal(this.$('.new-reminder-notes').val(), 'ok the title kind of sucks')
});

test('renders a save button', function(assert) {
  this.render(hbs`{{edit-reminder model=model}}`)
  assert.equal(this.$('.save-updates-btn').text(), 'Save')
})

test('does NOT render an undo button before changes are made', function(assert) {
  this.render(hbs`{{edit-reminder model=model}}`)
  assert.equal(this.$('.undo-updates-btn').text(), '')
})
