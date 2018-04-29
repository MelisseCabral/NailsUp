import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AuthController from './../Controller/AuthController'
import firebase from 'firebase';

//Look for best one MessageBar
import { showMessage, MessageBar } from 'react-native-messages';
import TextInput from 'react-native-material-textinput';

var { width, height } = Dimensions.get('window');

export default class FormLogin extends React.Component {

    state = { email: '', password: '' };

    constructor(props){
        super(props);
        this.state = {email: '', password: '', error:'', loading:false};
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCi2kQbt9xjCcvu7x-OUaoxA0gH9lwxz3c",
            authDomain: "nailsup-7e965.firebaseapp.com",
            databaseURL: "https://nailsup-7e965.firebaseio.com",
            projectId: "nailsup-7e965",
            storageBucket: "",
            messagingSenderId: "118066102064"
        });
    }
    
    onLoginPress() {
        this.setState({ error: '', loading: true});
      
        const password = this.state.password;
        const email = this.state.email;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.props.navigation.navigate('HomeUser');
            this.setState({ error: '', loading: false});
        })
        .catch(() => {
            this.setState({error: 'Falha de autenticação.', loading: false})
            showMessage('Login falhou!')
        })
    };

    onLogoutPress() {
        this.setState({ error: '', loading: true});
      
        const password = this.state.password;
        const email = this.state.email;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.renderLogin();
          this.setState({ error: '', loading: false});
        })
        .catch(() => {
            this.setState({error: 'Falha de autenticação.', loading: false})
            showMessage('Logout falhou!');
        })
    };

    renderLogin() {
        return <TouchableHighlight style={styles.circleBtn}
                    underlayColor='transparent'
                    onPress={this.onLoginPress.bind(this)}>
                    <View style={styles.Row}>
                        <Icon name="arrow-right" style={styles.iconCircle} size={25} color="#da5353" />
                        <Text style={styles.TextBtn}>Cadastro</Text>
                    </View>
                </TouchableHighlight>;
    }

    render() {
        
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
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            ref={(input)=> this.userInput = input}  
                        />
                        <TextInput
                            style={styles.textInputForm}
                            label="Senha"
                            labelColor='gray'
                            width={width - 60}
                            underlineActiveColor="#da5353"
                            activeColor="#da5353"
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            onSubmitEditing={() => this.onLoginPress()}
                            ref={(input)=> this.userInput = input}  
                        />
                       

                        <View style={styles.alignRightBottom}>
                            <TouchableHighlight style={styles.circleBtn}
                                underlayColor='transparent'
                                onPress={this.onLoginPress.bind(this)}>
                                <View style={styles.Row}>
                                    <Icon name="arrow-right" style={styles.iconCircle} size={25} color="#da5353" />
                                    <Text style={styles.TextBtn}>Login</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
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