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

export default class PanelUser extends React.Component {
  constructor() {
    super();
  }
  onLogoutPress() {
    this.setState({ error: '', loading: true});
  
    firebase.auth().signOut().then(() => {
        this.props.navigation.navigate('HomeUser');
      }).catch(() => {
        this.setState({error: 'Falha de autenticação.', loading: false})
        showMessage('Logout falhou!');
    })
};
  static navigationOptions = ({ navigation, screenProps }) => ({
      title: "",
      headerMode: 'screen'
    });
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground
                                style={styles.imgBg}
                                source={require('./../images/bgLogin.png')}
                            >
                              <Image style={styles.photo} source={require('./../images/user.png')} />
                              <View style={styles.alignRightBottom}>
                                        <TouchableHighlight style={styles.circleBtn}
                                            underlayColor='transparent'
                                            onPress={this.onLogoutPress.bind(this)}>
                                            <Text style={styles.TextBtn}>Sair</Text>
                                        </TouchableHighlight>
                                </View>
                        </ImageBackground>
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
        paddingTop: 20,
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

    photo: {
        width: width * 0.2,
        height: height * 0.2,
        resizeMode: 'center',
        marginBottom: height *0.1
    },

    circleBtn: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        height: 50,
        backgroundColor: 'transparent',
        margin: 5,

    },
    imgBg: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },

});