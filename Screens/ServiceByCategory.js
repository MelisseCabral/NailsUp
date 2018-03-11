import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';

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
              <View> 
                  <Text style={{fontSize:96}}>Scroll me plz</Text>
                  <Text style={{fontSize:96}}>If you like</Text>
                  <Text style={{fontSize:96}}>Scrolling down</Text>                    
              </View>
          </ScrollView>
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
    }
  });