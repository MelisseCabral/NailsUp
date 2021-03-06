import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';
import firebase from 'firebase';

import Home from './Home';
import StackUser from './StackUser';
import StackServices from './StackServices';
import StackScheduling from './StackScheduling';
import Scheduling from './Scheduling';
import Contact from './Contact';

const deviceW = Dimensions.get('window').width
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx;
}

export default class TabHome extends React.Component {
    
    static navigationOptions = {
        header: null
      };
    
    state= {
      selectedTab: 'inicial'
    };
    static navigationOptions = {
      title: '',
      header: null
    };
    componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyCi2kQbt9xjCcvu7x-OUaoxA0gH9lwxz3c",
          authDomain: "nailsup-7e965.firebaseapp.com",
          databaseURL: "https://nailsup-7e965.firebaseio.com",
          projectId: "nailsup-7e965",
          storageBucket: "",
          messagingSenderId: "118066102064"
      });
    }
    render() {
        const{navigate} = this.props.navigation;
      return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'inicial'}
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#da5353"/>}
            onPress={() => this.setState({ selectedTab: 'inicial' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'services'}
            renderIcon={() => <Icon name="bars" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="bars" size={px2dp(22)} color="#da5353"/>}
            onPress={() => this.setState({ selectedTab: 'services' })}>
            <StackServices />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'scheduling'}
            renderIcon={() => <Icon name="calendar" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="calendar" size={px2dp(22)} color="#da5353"/>}
            onPress={() => this.setState({ selectedTab: 'scheduling' })}>
            <StackScheduling />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            renderIcon={() => <Icon name="envelope" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="envelope" size={px2dp(22)} color="#da5353"/>}
            onPress={() => this.setState({ selectedTab: 'contact' })}>
            <Contact />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'login'}
            renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#da5353"/>}
            onPress={() => this.setState({ selectedTab: 'login' })}>
            <StackUser />
          </TabNavigator.Item>
        </TabNavigator>
        
      );
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