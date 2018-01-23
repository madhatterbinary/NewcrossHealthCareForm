import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const FirstFormReducer = (state = {}, action ) => {
    switch(action.type) {
     
    case actionTypes.GET_FIRST_FORM_DATA:

      return  updateObject(state, action.payload);
      
    default:
        return state;
    }
}

export default FirstFormReducer;