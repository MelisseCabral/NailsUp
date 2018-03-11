import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class Home extends React.Component {
    render() {
      return (
        <Swiper style={styles.wrapper} showsButtons={false}>
          <ImageBackground
          source={require('./../images/slider_10.png')}
          style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </ImageBackground>
          <ImageBackground
          source={require('./../images/slider_6.png')}
          style={styles.slide1}>
            <Text style={styles.text}>Beautiful</Text>
          </ImageBackground>
          <ImageBackground
          source={require('./../images/slider_1.png')}
          style={styles.slide1}>
            <Text style={styles.text}>And simple</Text>
          </ImageBackground>
      </Swiper>
      )
    }
  }
  const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    
  });