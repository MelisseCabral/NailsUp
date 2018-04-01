import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry, Image, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { showMessage, MessageBar } from 'react-native-messages';

var { width, height } = Dimensions.get('window');


export default class Scheduling extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { navigate } = this.props.navigation;

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
                            <View style={styles.rowCard}>
                                <View style={styles.alignLeft}>
                                    <Text style={styles.titleBox}> Serviço</Text>
                                    <Text style={styles.thlBox}> Descrição</Text>
                                    <View style={styles.alignLeftDuration}>
                                        <Text style={styles.textPrice}> Duração: 15min, R$ 30,00</Text>
                                    </View>
                                </View>

                                <TouchableHighlight style={styles.alignRight}
                                    underlayColor='transparent'
                                    onPress={() => showMessage('Serviço adicionado com sucesso!')}>
                                    <Icon name="trash" size={25} style={styles.icons} color="#da5353" />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={styles.alignRightBottom}>
                        <TouchableHighlight style={styles.circleBtn}
                            underlayColor='transparent'
                            onPress={() => navigate('FormScheduling', )}>
                            <Icon name="angle-right" style={styles.iconCircle} size={25} color="#da5353" />
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <View style={styles.containerPrice}>
                    <Text style={styles.textPrice}> R$ </Text>
                </View>
                <MessageBar />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffd8d8',
        alignItems: 'center',
    },
    containerCard: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: "#fff",
        width: width - 20,
        margin: 10,
        height: 100,
        borderRadius: 3,
    },
    alignLeftDuration: {
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    rowCard: {
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
    },
    alignRight: {
        marginTop: 10,
        marginRight: 10,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    alignRightBottom: {
        marginTop: 220,
        marginRight: 10,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    serviceDesc: {
        marginLeft: 20,
        width: (width - 100),
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    welcome: {
        margin: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    imgBg: {
        width: width,
        height: 170,
        justifyContent: 'flex-end'
    },
    columns: {
        marginTop: 5,
        width: (width - 20),
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
        paddingLeft: 100,
    },
    iconCircle: {
        paddingLeft: 2,
    },
    button: {
        color: "#3496f0",
        margin: 20,

    },
    circleBtn: {
        borderRadius: 50,
        borderWidth: 0.031,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#fff',

    },
    imgBg: {
        width: width,
        height: 170,
        justifyContent: 'flex-end'
    },
    containerPrice: {
        width: width,
        height: 25,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    textPrice: {
        color: '#da5353'
    },
    containerDuration: {
        height: 25,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    alignLeft: {
        marginLeft: 10,
        marginTop: 10,
        width: width * 0.5,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
});