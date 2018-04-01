import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InicialTabs from './Screens/InicialTabs';
import TabHome from './Screens/TabHome';
import { StackNavigator } from 'react-navigation';
import firebase from "firebase"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCi2kQbt9xjCcvu7x-OUaoxA0gH9lwxz3c",
  authDomain: "nailsup-7e965.firebaseapp.com",
  databaseURL: "https://nailsup-7e965.firebaseio.com",
  projectId: "nailsup-7e965",
  storageBucket: "",
  messagingSenderId: "118066102064"
};
firebase.initializeApp(config);

const App = StackNavigator(
  {
    HomeScreen: {
      screen: TabHome,
      navigationOptions: ({ navigation }) => ({
        title: '',
        header: null
      })
    },
  },
  {
    headerMode: 'screen'
  }
);
export default App;