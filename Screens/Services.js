import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator} from 'react-navigation';

var Dimensions = require('Dimensions');

// We can use this to make the overlay fill the entire width
var { width, height } = Dimensions.get('window');

export default class Services extends React.Component {

  constructor() {
    super();
  }
    render() {

      const {navigate} = this.props.navigation;

      return (
        <View style={styles.container}>
        <View style={styles.columns}>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Bronzeamento', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/spray_tan.png')}/>
              <Text style={styles.thlBox}> Bronze</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Detox', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/dtox.png')}/>
              <Text style={styles.thlBox}> DTOX</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Unhas', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/nails.png')}/>
              <Text style={styles.thlBox}> Unhas</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Depilação', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/waxing.png')}/>
              <Text style={styles.thlBox}> Depilação</Text>  
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.columns}>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Olhos', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/eyes.png')}/>
              <Text style={styles.thlBox}> Olhos</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Maquiagem', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/make_up.png')}/>
              <Text style={styles.thlBox}> Maquiagem</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Unhas', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/massage.png')}/>
              <Text style={styles.thlBox}> Massagem</Text>  
            </View>
          </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          underlayColor='transparent'
          onPress={() => navigate('ServiceByCategory', {category: 'Pacotes', props: this.props.navigation})}
          >
            <View style={{alignItems: 'center', flexDirection:'row'}}>
              <Image 
              style={styles.icons}
              source={require('../icons/packages.png')}/>
              <Text style={styles.thlBox}> Pacotes</Text>  
            </View>
          </TouchableHighlight>
        </View>
      </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', 
      flexDirection: 'row', 
      flex: 1,
      backgroundColor: '#da5353',
      
    },
    alignRight: {
      marginTop: 20,
      marginRight: 60,
      alignSelf: 'flex-end',
    },
    welcome:{
      marginBottom: 20
    },
    button: {
      backgroundColor: "#fff",
      justifyContent: 'center', 
      alignItems: 'center',
      width: (width - 20) / 2,
      margin: 5,
      height: (height - 125) / 4,
      borderRadius: 5,
    },
    columns: {
      marginTop: 30
    },
    serviceCard: {
      height: 60,
      width: 160
    },
    thlBox: {
      color: '#c48c3a'
    },
    icons: {
      width: 30,
      height: 30,
      resizeMode: 'contain'
    }
  });