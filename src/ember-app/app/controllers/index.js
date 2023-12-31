import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kyrs6.caption'),
          title: i18n.t('forms.application.sitemap.kyrs6.title'),
          children: [{
            link: 'i-i-s-kyrs6-возврат-билета-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-возврат-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-возврат-билета-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kyrs6-покупка-билета-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-покупка-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-покупка-билета-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kyrs6-покупатель-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-покупатель-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-покупатель-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kyrs6-билетная-касса-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-билетная-касса-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-билетная-касса-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kyrs6-перевозчик-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-перевозчик-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-перевозчик-l.title'),
            children: null
          }, {
            link: 'i-i-s-kyrs6-оплата-билета-l',
            caption: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-оплата-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.kyrs6.i-i-s-kyrs6-оплата-билета-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})