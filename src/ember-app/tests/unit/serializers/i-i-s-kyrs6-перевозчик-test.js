import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs6-перевозчик', 'Unit | Serializer | i-i-s-kyrs6-перевозчик', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs6-перевозчик',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyrs6-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
