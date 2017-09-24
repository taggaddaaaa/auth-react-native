import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7Qi3wuiPQtzFZaY8FUHAKFU4AzV8VIHI',
      authDomain: 'auth-react-native-f5ffe.firebaseapp.com',
      databaseURL: 'https://auth-react-native-f5ffe.firebaseio.com',
      projectId: 'auth-react-native-f5ffe',
      storageBucket: 'auth-react-native-f5ffe.appspot.com',
      messagingSenderId: '318563548875'
    });

    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.setState({ loggedIn: true });
       } else {
         this.setState({ loggedIn: false });
       }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size="large" />
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentification"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
