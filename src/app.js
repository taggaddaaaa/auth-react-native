import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7Qi3wuiPQtzFZaY8FUHAKFU4AzV8VIHI',
      authDomain: 'auth-react-native-f5ffe.firebaseapp.com',
      databaseURL: 'https://auth-react-native-f5ffe.firebaseio.com',
      projectId: 'auth-react-native-f5ffe',
      storageBucket: 'auth-react-native-f5ffe.appspot.com',
      messagingSenderId: '318563548875'
    });

  }


  render() {
    return (
      <View>
        <Header headerText="Authentification"/>
        <Text>This is my new app!</Text>
      </View>
    );
  }
}

export default App;
