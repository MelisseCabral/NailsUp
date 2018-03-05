import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image,ImageBackground, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class Scheduling extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                    style={styles.imgBg}
                    source={{uri: 'https://www.w3schools.com/w3css/img_fjords.jpg'}}
                    >
                    <Text style={styles.welcome}>
                        Agende agora!
                    </Text>
                    </ImageBackground>
                </View>
                <View> 
                    <Text style={{fontSize:96}}>Scroll me plz</Text>
                    <Text style={{fontSize:96}}>If you like</Text>
                    <Text style={{fontSize:96}}>Scrolling down</Text>
                    <Text style={{fontSize:96}}>What's the best</Text>
                    <Text style={{fontSize:96}}>Framework around?</Text>
                    <Text style={{fontSize:80}}>React Native</Text>
                    
                </View>
            </ScrollView>
            <View style={styles.containerPrice}>
                <Text style={styles.textPrice}> R$ </Text>
            </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#da5353',
      alignItems: 'center',
    },
    alignRight: {
      marginTop: 20,
      marginRight: 60,
      alignSelf: 'flex-end',
    },
    welcome:{
      margin: 20,
      color: '#fff',


    },
    textPrice: {
        color: '#da5353'
    },
    button: {
      color: "#3496f0",
      margin: 20,
      
    },
    imgBg: {
        width: 360, 
        height: 170, 
        justifyContent:'flex-end'
    },
    containerPrice: {
        width: 360, 
        height: 25, 
        justifyContent:'center', 
        backgroundColor: '#fff', 
        paddingLeft:10
    }
  });