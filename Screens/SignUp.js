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

export default class SignUp extends React.Component {
    state = { email: '', password: '' };
    constructor(props){
        super(props);
        this.state = {email: '', password: '', error:'', loading:false};
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "",
        headerMode: 'screen'
      });
    
    onSignUpPress() {
        this.setState({error:'', loading: true});
  
    const{email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.navigate('PanelUser');
      this.setState({error: '', loading: false});
    })
    .catch(() => {
        this.setState({error: 'Falha ao criar usuario.', loading: false})
    })
  };
    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground
                                style={styles.imgBg}
                                source={require('./../images/bgLogin.png')}
                            >
                                <Image style={styles.userPhoto} source={require('./../images/app.png')} />
                                
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
                                        onPress={() => navigate('LoginForm', {})}>
                                        <View style={styles.Row}>
                                            <Text style={styles.TextBtn}>Já possui conta?</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.alignRightBottom}>
                                        <TouchableHighlight style={styles.circleBtn}
                                            underlayColor='transparent'
                                            onPress={this.onSignUpPress.bind(this)}>
                                            <Text style={styles.TextBtn}>Cadastrar</Text>
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
        width: width * 0.2,
        height: height * 0.2,
        resizeMode: 'center',
        marginBottom: height *0.1
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