import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Card, ListItem, Button } from 'react-native-elements';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class HomeClient extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Home
        </Text>
        
      </View>
    )
  }
}

class Services extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Serviços
        </Text>
      </View>
    )
  }
}
class Scheduling extends React.Component {
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
  
  class Contact extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Serviços
          </Text>
        </View>
      )
    }
  }

export default class Home extends React.Component {
    
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
    render() {
        const{navigate} = this.props.navigation;
      return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'inicial'}
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'inicial' })}>
            <HomeClient />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'services'}
            renderIcon={() => <Icon name="bars" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="bars" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'services' })}>
            <Services />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'scheduling'}
            renderIcon={() => <Icon name="calendar" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="calendar" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'scheduling' })}>
            <Scheduling />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            renderIcon={() => <Icon name="envelope" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="envelope" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'contact' })}>
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      );
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