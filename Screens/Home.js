import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';
import Slideshow from 'react-native-slideshow';

export default class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Slideshow style={styles.slide}
            dataSource={[
              { url:'http://bit.ly/2I3ievV' },
              { url:'http://bit.ly/2I3ievV' },
              { url:'http://bit.ly/2I3ievV' }
            ]}
          />
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
    welcome:{
      marginBottom: 20
    },
    slide: {
      
    },
  });