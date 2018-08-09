import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from '../actions/types';

const INITIAL_STATE = {
  email : '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; //create a new object with all properties of state, then add email property with payload- if email property exists overwrite it
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    default:
      return state;
  }
};
