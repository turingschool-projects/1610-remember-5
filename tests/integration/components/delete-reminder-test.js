import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-reminder', 'Integration | Component | delete reminder', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{delete-reminder}}`);
  assert.equal(this.$('.delete-reminder-btn').length, 1, 'should render a single button');
});

test('it has text of just an X', function(assert) {
  this.render(hbs`{{delete-reminder}}`);
  assert.equal(this.$('.delete-reminder-btn').text(), 'X', "should have 'Delete' text on button ");
});
