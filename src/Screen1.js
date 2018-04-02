import React, {Component} from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class Screen1 extends Component {
    constructor(){
        super();
        this.state={
          pinja: [],
          pinjaVal: [],
          whatClick: ''
        }
      }

    machiner() {
   
        const ref = firebase.database().ref(`/Enrol/${this.checkMe()}`).orderByKey();
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
          });
          //console.log(this.checkMe());
    }

    componentDidMount() {
        this.machiner();
      }

      checkMe(sss){
          if(sss !== true){
            sss='';
            console.log(sss);
            return (sss);
          }
          else{
            return sss;
          }
      }
      
          render() {
            //console.log(this.state.pinjaVal);
            
              return (
                //view
                <ImageBackground 
                      style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}} 
                      source={{uri:'https://firebasestorage.googleapis.com/v0/b/enrol-cbd49.appspot.com/o/medical_app_bg-01.jpg?alt=media&token=01858009-b16b-4006-a911-236882d28942'}}>
                  
                  <Text style={Styles.textContainer}>Hello Motto</Text>
                  
                  { Object.keys(this.state.pinjaVal).map(i => 
                  {
                  return (<Button onPress={this.checkMe(this.state.pinjaVal[i])} key={this.state.pinjaVal[i]} title = {this.state.pinjaVal[i]} />);
                  })
                  } 

                  </ImageBackground>
      
      
                //database conn
          
                );
            }
          }
          
          const Styles = {
            textContainer: {
                fontSize: 30,
                marginBottom: 15
            }
        }

export default Screen1;