import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InicialTabs from './Screens/InicialTabs';
import Home from './Screens/Home';
import Login from './Screens/InicialTabs';
import SignUp from './Screens/InicialTabs';
import { StackNavigator} from 'react-navigation';

const App = StackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    Inicial: {
      screen: InicialTabs, 
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {title: '', header: null}
    },
    LoginScreen: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        title: '', 
        header: null
    })
    },
    
  },
  { 
    headerMode: 'screen',
    header: { visible:false },
  }
);
export default App;