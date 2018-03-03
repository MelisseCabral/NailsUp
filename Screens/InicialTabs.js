import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';
import Login from './Login';
import SignUp from './SignUp';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class InicialTabs extends React.Component {

    state= {
      selectedTab: 'login'
    };
    static navigationOptions = {
      title: '',
      header: null
    };
    constructor(props){
      super(props);
    };

    render() {
      const{navigate} = this.props.navigation;
      return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'login'}
            title="Login"
            renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'login' })}>
            <Login />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'signup'}
            title="Novo Usuario"
            renderIcon={() => <Icon name="user-plus" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="user-plus" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'signup' })}>
            <SignUp />
          </TabNavigator.Item>
        </TabNavigator>
      );
    }
  }
  