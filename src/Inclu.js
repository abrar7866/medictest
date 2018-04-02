import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

class Inclu extends Component {

    goNow(destine, key, data){
        switch(destine){
            case 'IncluExclu':
                return (Actions.IncluExclu({ keys: key, datas: data }));
            break;

            case 'About':
                return (Actions.About({ keys: key, datas: data }));
            break;

            case 'Contact':
                return (Actions.Contact({ keys: data, nurse: key.nurse}));
            break;
        }
    }

    render(){
        //console.log(this.props.keys, this.props.datas);
        return (
            <ImageBackground
                 style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                 source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/enrol-cbd49.appspot.com/o/medical_app_bg-01.jpg?alt=media&token=01858009-b16b-4006-a911-236882d28942' }}>
 
 <Text style={Styles.textContainer}>{this.props.datas}</Text>
                 
                <Button onPress={this.goNow.bind(this, 'IncluExclu', this.props.keys, this.props.datas)} title='Inclusion/Exclusion'>Inclusion/Exclusion</Button>
                <Button onPress={this.goNow.bind(this, 'About', this.props.keys, this.props.datas)} title='About the Study'>About the Study</Button>
                <Button onPress={this.goNow.bind(this, 'Contact', this.props.keys, this.props.datas)} title='Contact Nurse'>Contact Nurse</Button>
 
             </ImageBackground>
         );
    }
}

const Styles = {
    textContainer: {
        fontSize: 30,
        marginBottom: 15
    }
}

export default Inclu;