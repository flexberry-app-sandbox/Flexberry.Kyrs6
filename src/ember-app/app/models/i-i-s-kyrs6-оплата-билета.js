import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОплатаБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs6-оплата-билета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОплатаБилетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
