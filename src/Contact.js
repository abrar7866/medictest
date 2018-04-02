import React, {Component} from 'react';
import { View, Text, ImageBackground, TextInput, CheckBox } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import Button from './Button';

class Contact extends Component {

    constructor(){
        super();
        this.state={
            patientName: '',
            patientNumber: '',
            comment: '',
            checked: false
        }
      }

    onEmailPress(keys, nurse, check){
        Communications.email(
            [nurse], 
            null, 
            null, 
            `Patient to contact for ${keys}`, 
            `Please contact patient ${this.state.patientName} 
                \nPhone number: ${this.state.patientNumber}
                \nAs he/she might meet the criteria for our study: ${keys}
                ${check}
                \nComments: ${this.state.comment}`);
    }

    checkine(){
        if(this.state.checked){
            return (`\n*Please also consider him/her for other studies.`)
        }
        else{
            return '';
        }
    }
    

    render(){
        //console.log(this.props.keys, this.props.datas);
        return (
            <View
                style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
            >

        <View style={Styles.cardStyle}>
            <View style={Styles.containerStyleMain}>
                <View style={Styles.containerStyle}>
                    <Text style={Styles.labelStyle}>Name</Text>
                    <TextInput
                        placeholder='Patient'
                        autoCorrect={false}
                        style={Styles.inputStyle}
                        onChangeText={(patientName) => this.setState({patientName})}
                    />
                </View>
            </View>
            <View style={Styles.containerStyleMain}>
                <View style={Styles.containerStyle}>  
                    <Text style={Styles.labelStyle}>Phone</Text>
                    <TextInput
                        placeholder='XXX-XXX-XXXX'
                        autoCorrect={false}
                        keyboardType='numeric'
                        style={Styles.inputStyle}
                        onChangeText={(patientNumber) => this.setState({patientNumber})}
                    />
                </View>
            </View>
            <View style={Styles.containerStyleMain}>
                <View style={Styles.containerStyle}>
                    <Text style={Styles.labelStyle}>Comment</Text>
                    <TextInput
                        placeholder='Comments'
                        maxLength={40}
                        style={Styles.inputStyle}
                        onChangeText={(comment) => this.setState({comment})}
                    />
                </View>
            </View>
            <View style={[Styles.containerStyleMain,{ paddingTop: 20 }]}>
                <View style={Styles.containerStyle}>
                    <Button
                        onPress={this.onEmailPress.bind(this, this.props.keys, this.props.nurse, this.checkine())} 
                        style={Styles.buttonStyle}>Send
                    </Button>
                </View>
            </View>

             <View style={[{ justifyContent: 'center' },Styles.containerStyleMain]}>
                <View style={[Styles.containerStyle]}>
                <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                    />
                <Text> *Consider this patient for multiple studies </Text>
                </View>
            </View>

        </View>
             </View>
         );
    }
}

const Styles = {
    buttonTextStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff',
        fontWeight: '500',
        alignSelf: 'center',
        fontSize: 18,
        //color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderColor: '#007aff',
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        //backgroundColor: '#5bbc2e', 
        //borderColor: '#5bbc2e' , 
        //marginTop: 30, 
        elevation: 1
    },
    cardStyle:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0
    },
    textContainer: {
        fontSize: 30,
        marginBottom: 15
    },
    inputStyle: {
        flex: 3,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        width: 100,
        height: 50,
        alignSelf: 'flex-end'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1,
        fontWeight: '500'
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerStyleMain: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default Contact;