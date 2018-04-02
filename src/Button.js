import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Button = ({ title, children, onPress }) => {
        return(
            <View style={Styles.containerStyleMain}>
                <View style={Styles.containerStyle}>
                    <TouchableOpacity title={title} onPress={onPress} style={Styles.buttonStyle}>
                    <Text style={Styles.buttonTextStyle}>{children}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

const Styles = {
    buttonTextStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#303030',
        fontWeight: '600',
        alignSelf: 'center',
        fontSize: 18, 
        //color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#ffc107',
        borderColor: '#e5ac00',
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
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerStyleMain: {
        borderBottomWidth: 0,
        padding: 5,
       
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default Button;