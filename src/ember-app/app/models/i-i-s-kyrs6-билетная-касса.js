import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БилетнаяКассаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs6-билетная-касса';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БилетнаяКассаMixin, Validations, {
});

defineProjections(Model);

export default Model;
