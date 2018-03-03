import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class SignUp extends React.Component {

    static navigationOptions = {
        title: '',
        header: null
    };
    constructor(props){ 
        super(props) 
    }
    onSignUpPress() {
        this.props.navigation.navigate('HomeScreen');
    };

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Registrar-se
          </Text>
          <TextInput
            style={styles.textinput }
            placeholder="Email"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Senha"
            onChangeText={(text) => this.setState({text})}
          />
          <View style={styles.alignRight}>
            <Button
            onPress={this.onSignUpPress.bind(this)}
              style={styles.button}
              title="Resgistrar-se"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignRight: {
      marginTop: 20,
      marginRight: 60,
      alignSelf: 'flex-end',
    },
    welcome:{
      marginBottom: 20
    },
    textinput: {
      height: 40, 
      width: 250
    },
    button: {
      color: "#3496f0",
      margin: 20,
      
    }
  });