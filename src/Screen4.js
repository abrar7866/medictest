import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Button from './Button';
import {Send} from './sender';

class Screen4 extends Component {
    renderButtons(keys, datas){
        var nnn = [];
        var xyz = [];
        var keysi = [];

        Object.keys(keys).map(i => {
            keysi.push(keys[i]);
           xyz = Object.keys(keys);
           
        });

        Object.keys(xyz).map(i => {
            nnn.push(
                <Button onPress={this.clicked.bind(this,keysi[i],xyz[i])} key={xyz[i]}>{xyz[i]}</Button>
            );
        });
        //console.log(keys.datas[i]);
        return nnn;
    }

    clicked(keys , datas){
        //console.log(keys,datas);
        Actions.Screen5({ datas: datas, keys: keys });
    }

    render() {
        {/* <Send keyz="ssss" /> */}
        //console.log(this.props.datas);
        return (
            
           <ImageBackground
                style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/enrol-cbd49.appspot.com/o/medical_app_bg-01.jpg?alt=media&token=01858009-b16b-4006-a911-236882d28942' }}>

                <Text style={Styles.textContainer}>{this.props.datas}</Text>

                {this.renderButtons(this.props.keys, this.props.datas)}
                
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

export default Screen4;