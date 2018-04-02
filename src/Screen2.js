import _ from 'lodash';
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
const traverse = require('json-schema-traverse');

class Screen2 extends Component {
    constructor(){
        super();
        this.state={
        fullArray: ''
        }
    }
    
    componentWillMount(){
            const ref = firebase.database().ref(`/Enrol/`);
              ref.on('value', (snapshot) => {
                this.setState({ fullArray: snapshot.val() });
              });
    }

    mapper() {
        const statica = _.map(this.state.fullArray, (val, uid) => {
            return { ...val, uid };
        });
        //console.log(this.state.fullArray);
        return { statica };
    }

    runover(){
        var data = this.state.fullArray;

        var keytoFind = "uid";
        var index = Object.keys(data).indexOf(keytoFind);
        console.log(index);

        /* var lev = [];
        const uids = []; //have uids nafld, pbc
         for (var each in data){
            lev = data[each];
            var xll = Object.values(lev);
            for(var act in xll){
                uids.push(xll[act].uid);
                var xll2 = Object.values(uids);
                console.log(xll2);
            }
        } */
        //console.log(lev);
        //console.log(uids[0]);
        
        //console.log(paths(arrayla));
        //var keys = Object.keys(arrayla);
        //var firstBut = keys["0"];
        
    }

   render() {
       //console.log(this.runover());
       return(
        <View>
            <Text>{this.runover()}</Text>
        </View>
       );
   }
}

export default Screen2;