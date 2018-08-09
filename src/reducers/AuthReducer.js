import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
  email : '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type){
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; //create a new object with all properties of state, then add email property with payload- if email property exists overwrite it
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: ''};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed.', password: ''};
    default:
      return state;
  }
};
