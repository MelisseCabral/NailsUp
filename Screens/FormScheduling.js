import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Look for best one MessageBar
import { showMessage, MessageBar } from 'react-native-messages';
import DatePicker from 'react-native-datepicker';
import TextInput from 'react-native-material-textinput';

var { width, height } = Dimensions.get('window');


export default class FormScheduling extends React.Component {
    constructor() {
        super();
        this.state = { name: '', phone: "Telefone", date: "11-03-2018", hora: '08-00' };
    }
    render() {
        const { navigate } = this.props.navigation;
        let { name } = this.state.name;
        let { phone } = this.state.phone;
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

                    <View style={styles.containerCard}>
                        <Text style={styles.titleBox}> Vamos Agendar?</Text>
                        <Text style={styles.thlBox}> Para isso informe seu contato.</Text>

                        <TextInput
                            style={styles.textInputForm}
                            label="Nome"
                            labelColor='gray'
                            width={width - 60}
                            underlineActiveColor="#da5353"
                            activeColor="#da5353"
                            value={name}
                            onChangeText={name => this.setState({ name })}
                        />
                        <TextInput
                            style={styles.textInputForm}
                            label="Telefone"
                            labelColor='gray'
                            width={width - 60}
                            underlineActiveColor="#da5353"
                            activeColor="#da5353"
                            value={phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                        <View style={styles.Row}>
                            <DatePicker
                                style={{ width: 200 }}
                                iconComponent={<Icon name="calendar" style={{ margin: 5 }} size={25} color="#da5353" />}
                                date={this.state.date}
                                mode="datetime"
                                placeholder="Data"
                                format="DD-MM-YYYY-HH-MM"
                                minDate="31-03-2018"
                                maxDate="31-03-2019"
                                minDate="00-00"
                                maxDate="23-59"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>

                        <View style={styles.containerPrice}>
                            <Text style={styles.textPrice}>Total: R$ </Text>
                        </View>
                        <View style={styles.alignRightBottom}>
                            <TouchableHighlight style={styles.circleBtn}
                                underlayColor='transparent'
                                onPress={() => showMessage('Agendamento Confirmado!')}>
                                <View style={styles.Row}>
                                    <Icon name="check" style={styles.iconCircle} size={25} color="#da5353" />
                                    <Text style={styles.TextBtn}>Confirmar</Text>
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
        width: 130,
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