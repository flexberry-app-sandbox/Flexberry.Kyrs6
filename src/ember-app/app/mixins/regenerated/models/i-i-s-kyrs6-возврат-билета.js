import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВозврата: DS.attr('date', { defaultValue() { return new Date(); } }),
  покупкаБилета: DS.belongsTo('i-i-s-kyrs6-покупка-билета', { inverse: null, async: false })
});

export let ValidationRules = {
  датаВозврата: {
    descriptionKey: 'models.i-i-s-kyrs6-возврат-билета.validations.датаВозврата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs6-возврат-билета.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВозвратБилетаE', 'i-i-s-kyrs6-возврат-билета', {
    датаВозврата: attr('Дата возврата', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs6-покупка-билета', 'Покупка билета', {
      датаПокупки: attr('Дата покупки', { index: 2 }),
      пунктОтправ: attr('Пункт отправления', { index: 3 }),
      пунктНазнач: attr('Пункт назначения', { index: 4 }),
      место: attr('Место', { index: 5 }),
      перевозчик: belongsTo('i-i-s-kyrs6-перевозчик', '', {
        наименование: attr('Перевозчик', { index: 6 })
      }, { index: -1, hidden: true }),
      покупатель: belongsTo('i-i-s-kyrs6-покупатель', '', {
        фИО: attr('Покупатель', { index: 7 }),
        банковскийСчет: attr('Банковский счет', { index: 8 })
      }, { index: -1, hidden: true }),
      билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', '', {
        наименование: attr('Место расчета', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'пунктОтправ' })
  });

  modelClass.defineProjection('ВозвратБилетаL', 'i-i-s-kyrs6-возврат-билета', {
    датаВозврата: attr('Дата возврата', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs6-покупка-билета', 'Дата покупки', {
      датаПокупки: attr('Дата покупки', { index: 1 }),
      пунктОтправ: attr('Пункт отправления', { index: 2 }),
      пунктНазнач: attr('пункт назначения', { index: 3 }),
      место: attr('Место', { index: 4 }),
      перевозчик: belongsTo('i-i-s-kyrs6-перевозчик', '', {
        наименование: attr('Перевозчик', { index: 5 })
      }, { index: -1, hidden: true }),
      покупатель: belongsTo('i-i-s-kyrs6-покупатель', '', {
        фИО: attr('Покупатель', { index: 6 }),
        банковскийСчет: attr('Банковский счет', { index: 7 })
      }, { index: -1, hidden: true }),
      билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', '', {
        наименование: attr('Место расчета', { index: 8 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
