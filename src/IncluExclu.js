import React, {Component} from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class IncluExclu extends Component {

    showDown(key1, key2){
        return(
            <ScrollView>
                <View style={{ marginTop: 30 }}>
                    <View style={Styles.viewStyle}>       
                        <Text style={Styles.heading}>Inclusion</Text>
                        <Text style={Styles.para}>{key1}</Text>
                    </View>
                    <View style={[Styles.viewStyle, { marginTop: 20 }]}>
                        <Text style={[Styles.heading, {marginTop: 20}]}>Exclusion</Text>
                        <Text style={Styles.para}>{key2}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

    render(){
        var stringo1 = this.props.keys.incEx.inc;
        var stringo2 = this.props.keys.incEx.ex;
        var formattedString1 = stringo1.split(",").join("\n\n");
        var formattedString2 = stringo2.split(",").join("\n\n");
        //console.log(formattedString);

        //console.log(this.props.keys, this.props.datas);
        return (
            <ScrollView>
            <View>
                {this.showDown(formattedString1, formattedString2)}
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

export default IncluExclu;