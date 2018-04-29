import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Look for best one MessageBar
import { showMessage, MessageBar } from 'react-native-messages';
import TextInput from 'react-native-material-textinput';

var { width, height } = Dimensions.get('window');


export default class FormScheduling extends React.Component {
    constructor() {
        super();
        this.state = { email: '', uid: "", name: "", pass:"" };
    }
    render() {

        let { email } = this.state.email;
        let { uid } = this.state.uid;
        let { name } = this.state.name;
        let { pass } = this.state.pass;

        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerCard}>
                        <Text style={styles.titleBox}> Login</Text>

                        <TextInput
                            style={styles.textInputForm}
                            label="Email"
                            labelColor='gray'
                            width={width - 60}
                            underlineActiveColor="#da5353"
                            activeColor="#da5353"
                            value={email}
                            onChangeText={email => this.setState({ email })}
                        />
                        <TextInput
                            style={styles.textInputForm}
                            label="Senha"
                            labelColor='gray'
                            width={width - 60}
                            underlineActiveColor="#da5353"
                            activeColor="#da5353"
                            value={pass}
                            onChangeText={pass => this.setState({ pass })}
                        />
                       

                        <View style={styles.alignRightBottom}>
                            <TouchableHighlight style={styles.circleBtn}
                                underlayColor='transparent'
                                onPress={() => showMessage('Tentativa de login')}>
                                <View style={styles.Row}>
                                    <Icon name="arrow-right" style={styles.iconCircle} size={25} color="#da5353" />
                                    <Text style={styles.TextBtn}>Login</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={styles.circleBtn}
                                underlayColor='transparent'
                                onPress={() => showMessage('Tentativa de login')}>
                                <View style={styles.Row}>
                                    <Icon name="arrow-right" style={styles.iconCircle} size={25} color="#da5353" />
                                    <Text style={styles.TextBtn}>Cadastro</Text>
                                </View>
                            </TouchableHighlight>
                    </View>


                </ScrollView >
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
        justifyContent: 'center',
        marginTop: 20,
    },
    textInputForm: {
        width: 240,

    },
    TextBtn: {
        color: '#da5353'
    },
    Row: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#fff",
        width: width - 20,
        margin: 10,
        marginBottom: 5,
        height: height * 0.6, // somar n*100 onde 100 é numero de itens no carrinho
        borderRadius: 5,
    },
    alignRight: {
        marginTop: 20,
        marginRight: 10,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    TextInput: {
        height: 30,
        width: width - 60,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'gray'
    },
    alignRightBottom: {
        margin: 10,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    alignLeft: {
        marginLeft: 20,
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
    iconCircle: {
        margin: 10,
    },
    textPrice: {
        color: '#da5353'
    },
    button: {
        color: "#3496f0",
        margin: 20,

    },
    circleBtn: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#da5353',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        backgroundColor: '#fff',
        marginRight: 10,

    },
    imgBg: {
        width: width,
        height: 170,
        justifyContent: 'flex-end'
    },
    containerPrice: {
        width: width - 60,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10
    }
});