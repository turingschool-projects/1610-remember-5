import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminder', 'Unit | Model | reminder', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('return undefined w/o valid input', function(assert) {
  let reminder = this.subject({});
  assert.equal(reminder.get('title'), undefined, 'title attribute throws error if empty')
});
