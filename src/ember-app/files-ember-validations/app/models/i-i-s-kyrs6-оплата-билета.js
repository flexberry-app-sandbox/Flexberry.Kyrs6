import {
  defineNamespace,
  defineProjections,
  Model as ОплатаБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs6-оплата-билета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОплатаБилетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
