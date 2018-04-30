import React from 'react';
import { StyleSheet, 
        Text, 
        View, 
        Button, 
        Image, 
        ImageBackground, 
        TouchableHighlight, CheckBox} from 'react-native';
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
                <ImageBackground
                                style={styles.imgBg}
                                source={require('./../images/bgLogin.png')}
                            >
                                <Image style={styles.userPhoto} source={require('./../images/user.png')} />
                                
                                <TextInput
                                    style={styles.textInputForm}
                                    label="Email"
                                    labelColor='#fff'
                                    inputColor="#fff"
                                    underlineColor="#fff"
                                    width={width - 60}
                                    underlineActiveColor="#fff"
                                    activeColor="#fff"
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    ref={(input)=> this.userInput = input}  
                                />
                                <TextInput
                                    style={styles.textInputForm}
                                    label="Senha"
                                    labelColor='#fff'
                                    underlineColor="#fff"
                                    width={width - 60}
                                    underlineActiveColor="#fff"
                                    activeColor="#fff"
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={password => this.setState({ password })}
                                    onSubmitEditing={() => this.onLoginPress()}
                                    ref={(input)=> this.userInput = input}  
                                />
                                <View style={styles.Row}>
                                    
                                    <TouchableHighlight style={styles.btnForgetPass}
                                        underlayColor='transparent'
                                        onPress={this.onLoginPress.bind(this)}>
                                        <View style={styles.Row}>
                                            <Text style={styles.TextBtn}>Esqueci a senha</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.alignRightBottom}>
                                        <TouchableHighlight style={styles.circleBtn}
                                            underlayColor='transparent'
                                            onPress={this.onLoginPress.bind(this)}>
                                            <Text style={styles.TextBtn}>Login</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                                
                        </ImageBackground>
                <MessageBar />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    chkBox:{
        backgroundColor: "transparent"
    },
    btnForgetPass:{
        paddingLeft: width *0.08
    },
    container: {
        flex: 1,
        backgroundColor: '#ffd8d8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    textInputForm: {
        width: 240,

    },
    TextBtn: {
        color: '#fff'
    },
    Row: {
        margin: 10,
        paddingRight: width *0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCard: {
        
        backgroundColor: "#fff",
        width: width - 20,
        margin: 10,
        marginBottom: 5,
        height: height * 0.85, // somar n*100 onde 100 é numero de itens no carrinho
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        
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
    userPhoto: {
        width: width * 0.25,
        height: width * 0.25,
        justifyContent: 'flex-end',
        margin: 10,
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
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        backgroundColor: 'transparent',
        marginRight: 10,

    },
    imgBg: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPrice: {
        width: width - 60,
        height: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10
    }
});