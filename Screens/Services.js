import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class Services extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Card style={styles.serviceCard}>
            <CardTitle 
              title="This is a title" 
              subtitle="This is subtitle"
            />
          </Card>
          <Card style={styles.serviceCard}>
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
                color="blue"
              />
              <CardButton
                onPress={() => {}}
                title="Later"
                color="blue"
              />
            </CardAction>
          </Card>
          <Card style={styles.serviceCard}>
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
                color="blue"
              />
              <CardButton
                onPress={() => {}}
                title="Later"
                color="blue"
              />
            </CardAction>
          </Card>
          <Card style={styles.serviceCard}>
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction 
              separator={true} 
              inColumn={false}>
              <CardButton
                onPress={() => {}}
                title="Push"
                color="blue"
              />
              <CardButton
                onPress={() => {}}
                title="Later"
                color="blue"
              />
            </CardAction>
          </Card>
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