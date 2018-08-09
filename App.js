import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'

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
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
