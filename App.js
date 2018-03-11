import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InicialTabs from './Screens/InicialTabs';
import TabHome from './Screens/TabHome';
import { StackNavigator} from 'react-navigation';

const App = StackNavigator(
  {
    HomeScreen: {
      screen: TabHome,
      navigationOptions: ({navigation}) => ({
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