import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

class Screen3 extends Component {
    constructor(){
        super();
        this.state={
         pinja: [],
         pinjaVal: [],
         globeVar:''
        }
      }

componentWillMount(){
            const ref = firebase.database().ref(`/Enrol/`).orderByKey();
                  ref.on('value', (snapshot) => {
                    const pusha = [];
                    const pusha2 = [];
                    snapshot.forEach( (childSnapShot) => {
                      pusha.push(childSnapShot.key);
                      pusha2.push(childSnapShot.val());
                      //console.log(childSnapShot.key);
                      //console.log(childSnapShot.val());
                       
                    });
                    //console.log(pusha2);
                    this.setState({ pinjaVal: pusha, pinja: pusha2 });
                    //Actions.Screen5({datas: this.state.pinja, keys: this.state.pinjaVal});
                  });
                  //console.log(this.state.pinja, this.state.pinjaVal);
    }

    abouting(keyin, data){
        var nnn = [];
        Object.keys(keyin).map(i => {
            
            nnn.push(
                <Button onPress={this.clicked.bind(this,keyin[i],data[i])} key={data[i]} title = {keyin[i]}>{data[i]}</Button>
            );

        });

        return (nnn);
    }

    clicked(keys , datas){
        //console.log(keys,datas);
        Actions.Screen4({ datas: datas, keys: keys });
    }
    

    render() {
        //console.log(this.state.pinja, this.state.pinjaVal);
        return (
           <ImageBackground
                style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/enrol-cbd49.appspot.com/o/medical_app_bg-01.jpg?alt=media&token=01858009-b16b-4006-a911-236882d28942' }}>

                <Text style={Styles.textContainer}>Ongoing Trials</Text>
                {this.abouting(this.state.pinja, this.state.pinjaVal)}
                
               

                {/* <Button title='NAFLD' onPress={this.caller.bind(this,'NAFLD')}>{this.state.pinjaVal}</Button>
                <Button title='PBC' onPress={this.caller.bind(this,'PBC')}>PBC</Button> */}

            </ImageBackground>
        );
    }
}
          
          const Styles = {
            textContainer: {
                fontSize: 30,
             
                color: '#303030',
                fontWeight: '500',
                marginBottom: 40
            }
        }

export default Screen3;