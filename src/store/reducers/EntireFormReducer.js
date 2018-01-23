import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const EntireFormReducer = (state = {}, action ) => {
    switch(action.type) {
     
    case actionTypes.SEND_ENTIRE_FORM_TO_SERVER:

      window.alert(`You submitted:\n\n${JSON.stringify(action.payload, null, 2)}`);

      return  updateObject(state, action.payload);
      
    default:
        return state;
    }
}

export default EntireFormReducer;