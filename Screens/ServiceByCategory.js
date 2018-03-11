import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';
import { showMessage, MessageBar } from 'react-native-messages';


var { width, height } = Dimensions.get('window');

export default class ServiceByCategory extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Login Page",
    headerMode: 'screen'
  });

  render() {
    const {params} = this.props.navigation.state;
    const category  = params ? params.category : null

    return (
        <View style={styles.container}>
          <ScrollView>
              <View style={styles.container}>
                  <ImageBackground
                  style={styles.imgBg}
                  source={{uri: 'https://www.w3schools.com/w3css/img_fjords.jpg'}}
                  >
                  <Text style={styles.welcome}>
                    {category}
                  </Text>
                  </ImageBackground>
              </View>
              <View style={styles.containerCard}>
                  <View style={styles.columns}>
                    <View style={styles.alignLeft}>
                        <Text style={styles.titleBox}> Serviço</Text>
                        <Text style={styles.thlBox}> Descrição</Text>  
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <TouchableHighlight style={styles.alignRight}
                    underlayColor='transparent'
                    onPress={() => showMessage('Serviço adicionado com sucesso!')}>
                        <Icon name="plus-circle" size={25} style={styles.icons} color="#da5353"/>
                    </TouchableHighlight>
                  </View>
              </View>                  
          </ScrollView>
          <MessageBar />
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
    containerCard: {
      flexDirection: 'row', 
      flex: 1,
      backgroundColor: "#fff",
      width: width - 20,
      margin: 10,
      height: 80,
      borderRadius: 5,
    },
    alignRight: {
      marginTop: 20,
      marginRight: 10,
      justifyContent:'flex-end',
      alignSelf: 'flex-end',
    },
    alignLeft: {
      marginLeft: 20,
      justifyContent:'center',
      alignSelf: 'flex-start',
    },
    welcome:{
      margin: 20,
      color: '#fff',


    },
    imgBg: {
        width: width, 
        height: 170, 
        justifyContent:'flex-end'
    },
    columns: {
      marginTop: 5
    },
    thlBox: {
      color: '#c48c3a'
    },
    titleBox: {
      color: '#c48c3a',
      fontWeight: 'bold',
      paddingTop: 3,
      marginBottom: 3
    },
    icons: {
      marginLeft: 220,
    }
  });