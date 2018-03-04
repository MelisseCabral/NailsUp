import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class Scheduling extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
           Agendar
          </Text>
          
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#da5353',
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
      
    },
    slide: {
      
    },
    serviceCard: {
      height: 60,
    }
  });