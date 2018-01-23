import * as actionTypes from '../actions/actionTypes';


const SkillsReducer = (state = {}, action ) => {
    switch(action.type) {

    case actionTypes.FETCH_SKILLS:

       return action.payload.data;
      
    default:

     return state;
    }
}

export default SkillsReducer;