import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs6-покупатель', 'Unit | Model | i-i-s-kyrs6-покупатель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrs6-билетная-касса',
    'model:i-i-s-kyrs6-возврат-билета',
    'model:i-i-s-kyrs6-оплата-билета',
    'model:i-i-s-kyrs6-перевозчик',
    'model:i-i-s-kyrs6-покупатель',
    'model:i-i-s-kyrs6-покупка-билета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
