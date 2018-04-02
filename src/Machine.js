import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

const Machine = ({ props }) => {
    console.log('In machine', props.buttonClicked);
    const ref = firebase.database().ref("Enrol").orderByKey();
        ref.on('value', (snapshot) => {
        const pusha = [];
        snapshot.forEach( (childSnapShot) => {
            pusha.push(childSnapShot.key);
            //console.log(childSnapShot.key);
        });
        //console.log(pusha);
        this.setState({ pinja: pusha });
        });
};

export default Machine;