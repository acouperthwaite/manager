import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'
import Router from './src/Router'

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCW3T1sNUYrF-Tz_cehJuSaMkHjvL3kgO0",
      authDomain: "manager-af9f8.firebaseapp.com",
      databaseURL: "https://manager-af9f8.firebaseio.com",
      projectId: "manager-af9f8",
      storageBucket: "",
      messagingSenderId: "513436285899"
    };
    firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
