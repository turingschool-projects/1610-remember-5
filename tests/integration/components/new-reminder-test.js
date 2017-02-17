import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-reminder', 'Integration | Component | new reminder', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$('.add-reminder-btn').length, 1, 'should render a form' )
});

test('renders a blank string in the inputs to start', function(assert) {

  this.render(hbs`{{new-reminder}}`)

  assert.equal(this.$('.new-reminder-title').val(), '')
  assert.equal(this.$('.new-reminder-date').val(), '')
  assert.equal(this.$('.new-reminder-notes').val(), '')
});

test('renders a submit button', function(assert) {
  this.render(hbs`{{new-reminder}}`)
  assert.equal(this.$('.add-reminder-btn').text(), 'Submit')
})
