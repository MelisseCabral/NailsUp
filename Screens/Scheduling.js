import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image,ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { StackNavigator} from 'react-navigation';

var { width, height } = Dimensions.get('window');


export default class Scheduling extends React.Component {
    render() {
      return (
        
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                    style={styles.imgBg}
                    source={require('./../images/make.jpg')}
                    >
                    <Text style={styles.welcome}>
                        Agende agora!
                    </Text>
                    </ImageBackground>
                </View>
                <View> 
                    <View style={styles.containerCard}>
                        <View style={styles.columns}>
                            <View style={styles.alignLeft}>
                                <Text style={styles.titleBox}> Serviço</Text>
                                <Text style={styles.thlBox}> Descrição</Text>  
                            </View>
                        </View>
                        <View style={styles.columns}>
                            <TouchableHighlight style={styles.alignRight}>
                                <Icon name="trash" size={25} style={styles.icons} color="#da5353"/>
                            </TouchableHighlight>
                        </View>
                    </View>     
                    
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
        fontWeight: 'bold'
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
        paddingLeft: 220,
    },
    textPrice: {
        color: '#da5353'
    },
    button: {
        color: "#3496f0",
        margin: 20,

    },
    imgBg: {
        width: width, 
        height: 170, 
        justifyContent:'flex-end'
    },
    containerPrice: {
        width: width, 
        height: 25, 
        justifyContent:'center', 
        backgroundColor: '#fff', 
        paddingLeft:10
    }   
  });