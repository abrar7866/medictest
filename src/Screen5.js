import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Inclu from './Inclu';
import Button from './Button';

class Screen5 extends Component {

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
        Actions.Inclu({ datas: datas, keys: keys });
    }

    /* renderButtons(){
        var nnn = [];
        Object.keys(this.props.keys).map(i => {
            nnn.push(<Button onPress={this.clicked.bind(this,this.props.keys[i],this.props.datas[i])} key={this.props.keys[i]} title = {this.props.keys[i]}>{this.props.keys[i]}</Button>);
        });
        //console.log(this.props.key);
        return nnn;
    }
        
    clicked(key,data){
        //console.log(key,data);
        Actions.Inclu({ datas: data, keys: key });
    } */

    render() {
        //console.log('screen5', this.props.keys);
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

export default Screen5;