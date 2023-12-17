import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKyrs6БилетнаяКассаLForm from './forms/i-i-s-kyrs6-билетная-касса-l';
import IISKyrs6ВозвратБилетаLForm from './forms/i-i-s-kyrs6-возврат-билета-l';
import IISKyrs6ОплатаБилетаLForm from './forms/i-i-s-kyrs6-оплата-билета-l';
import IISKyrs6ПеревозчикLForm from './forms/i-i-s-kyrs6-перевозчик-l';
import IISKyrs6ПокупательLForm from './forms/i-i-s-kyrs6-покупатель-l';
import IISKyrs6ПокупкаБилетаLForm from './forms/i-i-s-kyrs6-покупка-билета-l';
import IISKyrs6БилетнаяКассаEForm from './forms/i-i-s-kyrs6-билетная-касса-e';
import IISKyrs6ВозвратБилетаEForm from './forms/i-i-s-kyrs6-возврат-билета-e';
import IISKyrs6ОплатаБилетаEForm from './forms/i-i-s-kyrs6-оплата-билета-e';
import IISKyrs6ПеревозчикEForm from './forms/i-i-s-kyrs6-перевозчик-e';
import IISKyrs6ПокупательEForm from './forms/i-i-s-kyrs6-покупатель-e';
import IISKyrs6ПокупкаБилетаEForm from './forms/i-i-s-kyrs6-покупка-билета-e';
import IISKyrs6БилетнаяКассаModel from './models/i-i-s-kyrs6-билетная-касса';
import IISKyrs6ВозвратБилетаModel from './models/i-i-s-kyrs6-возврат-билета';
import IISKyrs6ОплатаБилетаModel from './models/i-i-s-kyrs6-оплата-билета';
import IISKyrs6ПеревозчикModel from './models/i-i-s-kyrs6-перевозчик';
import IISKyrs6ПокупательModel from './models/i-i-s-kyrs6-покупатель';
import IISKyrs6ПокупкаБилетаModel from './models/i-i-s-kyrs6-покупка-билета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs6-билетная-касса': IISKyrs6БилетнаяКассаModel,
    'i-i-s-kyrs6-возврат-билета': IISKyrs6ВозвратБилетаModel,
    'i-i-s-kyrs6-оплата-билета': IISKyrs6ОплатаБилетаModel,
    'i-i-s-kyrs6-перевозчик': IISKyrs6ПеревозчикModel,
    'i-i-s-kyrs6-покупатель': IISKyrs6ПокупательModel,
    'i-i-s-kyrs6-покупка-билета': IISKyrs6ПокупкаБилетаModel
  },

  'application-name': 'Kyrs6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kyrs6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs6',
          title: 'Kyrs6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kyrs6: {
          caption: 'Kyrs6',
          title: 'Kyrs6',
          'i-i-s-kyrs6-возврат-билета-l': {
            caption: 'Возврат билета',
            title: ''
          },
          'i-i-s-kyrs6-покупка-билета-l': {
            caption: 'Покупка билета',
            title: ''
          },
          'i-i-s-kyrs6-покупатель-l': {
            caption: 'Покупатель',
            title: ''
          },
          'i-i-s-kyrs6-билетная-касса-l': {
            caption: 'Билетная касса',
            title: ''
          },
          'i-i-s-kyrs6-перевозчик-l': {
            caption: 'Перевозчик',
            title: ''
          },
          'i-i-s-kyrs6-оплата-билета-l': {
            caption: 'Оплата билета',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kyrs6-билетная-касса-l': IISKyrs6БилетнаяКассаLForm,
    'i-i-s-kyrs6-возврат-билета-l': IISKyrs6ВозвратБилетаLForm,
    'i-i-s-kyrs6-оплата-билета-l': IISKyrs6ОплатаБилетаLForm,
    'i-i-s-kyrs6-перевозчик-l': IISKyrs6ПеревозчикLForm,
    'i-i-s-kyrs6-покупатель-l': IISKyrs6ПокупательLForm,
    'i-i-s-kyrs6-покупка-билета-l': IISKyrs6ПокупкаБилетаLForm,
    'i-i-s-kyrs6-билетная-касса-e': IISKyrs6БилетнаяКассаEForm,
    'i-i-s-kyrs6-возврат-билета-e': IISKyrs6ВозвратБилетаEForm,
    'i-i-s-kyrs6-оплата-билета-e': IISKyrs6ОплатаБилетаEForm,
    'i-i-s-kyrs6-перевозчик-e': IISKyrs6ПеревозчикEForm,
    'i-i-s-kyrs6-покупатель-e': IISKyrs6ПокупательEForm,
    'i-i-s-kyrs6-покупка-билета-e': IISKyrs6ПокупкаБилетаEForm
  },

});

export default translations;
