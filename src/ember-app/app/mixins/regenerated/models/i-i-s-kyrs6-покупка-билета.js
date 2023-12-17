import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПокупки: DS.attr('string'),
  датаПоездки: DS.attr('date'),
  датаПокупки: DS.attr('date', { defaultValue() { return new Date(); } }),
  место: DS.attr('number'),
  пунктНазнач: DS.attr('string'),
  пунктОтправ: DS.attr('string'),
  статус: DS.attr('i-i-s-kyrs6-статус'),
  билетнаяКасса: DS.belongsTo('i-i-s-kyrs6-билетная-касса', { inverse: null, async: false }),
  перевозчик: DS.belongsTo('i-i-s-kyrs6-перевозчик', { inverse: null, async: false }),
  покупатель: DS.belongsTo('i-i-s-kyrs6-покупатель', { inverse: null, async: false })
});

export let ValidationRules = {
  времяПокупки: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.времяПокупки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПоездки: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.датаПоездки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.место.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пунктНазнач: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.пунктНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пунктОтправ: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.пунктОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетнаяКасса: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.билетнаяКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  перевозчик: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.перевозчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-kyrs6-покупка-билета.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаБилетаE', 'i-i-s-kyrs6-покупка-билета', {
    датаПокупки: attr('Дата покупки', { index: 0 }),
    времяПокупки: attr('Время покупки', { index: 1 }),
    датаПоездки: attr('Дата поездки', { index: 2 }),
    пунктОтправ: attr('Пункт отправления', { index: 3 }),
    пунктНазнач: attr('Пункт назначения', { index: 4 }),
    место: attr('Место', { index: 5 }),
    покупатель: belongsTo('i-i-s-kyrs6-покупатель', 'Покупатель', {
      фИО: attr('Покупатель', { index: 7 })
    }, { index: 6, displayMemberPath: 'банковскийСчет' }),
    перевозчик: belongsTo('i-i-s-kyrs6-перевозчик', 'Перевозчик', {
      наименование: attr('Переводчик', { index: 9 })
    }, { index: 8, displayMemberPath: 'наименование' }),
    билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', 'Билетная касса', {
      наименование: attr('Место расчета', { index: 11 }),
      адрес: attr('Адрес расчета', { index: 12 })
    }, { index: 10, displayMemberPath: 'наименование' }),
    статус: attr('Статус', { index: 13 })
  });

  modelClass.defineProjection('ПокупкаБилетаL', 'i-i-s-kyrs6-покупка-билета', {
    датаПокупки: attr('Дата покупки', { index: 0 }),
    времяПокупки: attr('Время покупки', { index: 1 }),
    датаПоездки: attr('Дата поездки', { index: 2 }),
    пунктОтправ: attr('Пункт отправления', { index: 3 }),
    пунктНазнач: attr('Пункт назначения', { index: 4 }),
    место: attr('Место', { index: 5 }),
    покупатель: belongsTo('i-i-s-kyrs6-покупатель', 'Покупатель', {
      фИО: attr('Покупатель', { index: 6 })
    }, { index: -1, hidden: true }),
    перевозчик: belongsTo('i-i-s-kyrs6-перевозчик', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    билетнаяКасса: belongsTo('i-i-s-kyrs6-билетная-касса', 'Место расчета', {
      наименование: attr('Место расчета', { index: 8 }),
      адрес: attr('Адрес расчета', { index: 9 })
    }, { index: -1, hidden: true }),
    статус: attr('Статус', { index: 10 })
  });
};
