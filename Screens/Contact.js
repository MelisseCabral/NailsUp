import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

var Dimensions = require('Dimensions');

// We can use this to make the overlay fill the entire width
var { width, height } = Dimensions.get('window');

export default class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.columns}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.thlBox}> Deseja falar por telefone?</Text>
              <Icon name="phone" size={25} style={styles.icons} color="#c48c3a" />
              <Text style={styles.thlBox}> (61) 9917-1955</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.thlBox}> Indique e ganhe descontos</Text>
              <Icon name="share-alt" size={25} style={styles.icons} color="#c48c3a" />
              <Text style={styles.thlBox}> www.nailsup.com.br</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.thlBox}> Deseja saber algo?</Text>
              <Icon name="comments" size={25} style={styles.icons} color="#c48c3a" />
              <Text style={styles.thlBox}> info@nailsup.com.br</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.thlBox}> Aconteceu alguma coisa?</Text>
              <Text style={styles.thlBox}> Conte para que possamos resolver.</Text>
              <Icon name="envelope" size={25} style={styles.icons} color="#c48c3a" />
              <Text style={styles.thlBox}> help@nailsup.com.br</Text>
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
    backgroundColor: '#ffd8d8',

  },
  alignRight: {
    marginTop: 20,
    marginRight: 60,
    alignSelf: 'flex-end',
  },
  welcome: {
    marginBottom: 20
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    margin: 5,
    height: (height - 125) / 4,
    borderRadius: 5,
  },
  columns: {
    marginTop: 30
  },
  thlBox: {
    color: '#c48c3a'
  },
  icons: {
    padding: 15
  }
});