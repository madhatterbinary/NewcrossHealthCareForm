import { combineReducers } from 'redux';
import SkillsReducer from './SkillsReducer';
import EntireFormReducer from './EntireFormReducer';
import FirstFormReducer from './FirstFormReducer';
import { reducer as reduxFormReducer} from 'redux-form';

const rootReducer = combineReducers({
  skills: SkillsReducer,
  firstForm: FirstFormReducer,
  entireForm: EntireFormReducer,
  form: reduxFormReducer
});

export default rootReducer;
