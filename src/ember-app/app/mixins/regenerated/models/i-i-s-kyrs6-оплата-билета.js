import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОплаты: DS.attr('date', { defaultValue() { return new Date(); } }),
  покупкаБилета: DS.belongsTo('i-i-s-kyrs6-покупка-билета', { inverse: null, async: false })
});

export let ValidationRules = {
  датаОплаты: {
    descriptionKey: 'models.i-i-s-kyrs6-оплата-билета.validations.датаОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs6-оплата-билета.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаБилетаE', 'i-i-s-kyrs6-оплата-билета', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs6-покупка-билета', 'Покупка билета', {
      покупатель: belongsTo('i-i-s-kyrs6-покупатель', '', {
        фИО: attr('Покупатель', { index: 2 }),
        банковскийСчет: attr('Банковский счет', { index: 3 })
      }, { index: -1, hidden: true }),
      билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', '', {
        наименование: attr('Место расчета', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'пунктОтправ' })
  });

  modelClass.defineProjection('ОплатаБилетаL', 'i-i-s-kyrs6-оплата-билета', {
    датаОплаты: attr('Дата оплаты', { index: 0 }),
    покупкаБилета: belongsTo('i-i-s-kyrs6-покупка-билета', 'Покупатель', {
      покупатель: belongsTo('i-i-s-kyrs6-покупатель', '', {
        фИО: attr('Покупатель', { index: 1 }),
        банковскийСчет: attr('Банковский счет', { index: 3 })
      }, { index: -1, hidden: true }),
      билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', '', {
        наименование: attr('Место расчета', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
