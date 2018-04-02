import React, {Component} from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


class About extends Component {

    abouting(key,data){
        var nnn = [];
        for(data in key.about){
            nnn.push(
                <View key={key} style={Styles.viewStyle}>       
                    <Text style={[Styles.heading, {marginTop: 20}]}>{data}</Text> 
                    <Text style={Styles.para}>{key.about[data]}</Text>
                </View>
            );
        }
        return (nnn);
    }
    

    render(){
        //console.log(this.props.keys, this.props.datas);
        return (
            <ScrollView>
            <View style={{ marginTop: 30 }}>  
                {this.abouting(this.props.keys, this.props.datas)}
                <View key='comment' style={Styles.viewStyle}>       
                    <Text style={[Styles.heading, {marginTop: 20}]}>Comment</Text> 
                    <Text style={Styles.para}> </Text>
                </View>

             </View>
             </ScrollView>
         );
    }
}

const Styles = {
    textContainer: {
        fontSize: 30,
        marginBottom: 15
    },
    heading: {
        color: '#303030',
        fontSize: 25,
        marginBottom: 15,
        fontWeight: '500',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 18,
        backgroundColor: '#ffc107',
        elevation: 1,
    },
    para: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 5
    }

}

export default About;