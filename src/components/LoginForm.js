import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: ''};

  onButtonPress() {
    const { email, password } = this.state;
    console.log(email +': '+ password + ' ' + firebase);

    this.setState({error: ''});


    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            console.log(err);
            this.setState({ error: err.message});
          });
      });
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input placeholder="user@gmail.com"
                 label="E-mail"
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
                 style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection>
          <Input secureTextEntry
                 placeholder="password"
                 label="Password"
                 value={this.state.password}
                 onChangeText={password => this.setState({ password })}
                 style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
