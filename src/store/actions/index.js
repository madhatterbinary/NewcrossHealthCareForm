import axios from 'axios';
import * as actionTypes from './actionTypes';

const ROOT_URL = 'https://newcross-health.firebaseio.com/skills.json';

export function fetchSkills() {
   const request = axios.get(ROOT_URL);
   return {
       type: actionTypes.FETCH_SKILLS,
       payload: request
   }
}

export function getFirstFormData(data) {

    return {
        type:actionTypes.GET_FIRST_FORM_DATA,
        payload: data
    }
}

export function sendEntireFormData(data) {

    return {
        type:actionTypes.SEND_ENTIRE_FORM_TO_SERVER,
        payload: data
    }
}




