import {
  defineNamespace,
  defineProjections,
  Model as ПеревозчикMixin
} from '../mixins/regenerated/models/i-i-s-kyrs6-перевозчик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПеревозчикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
