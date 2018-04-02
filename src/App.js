//import _ from 'lodash';
import React, {Component} from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
//import ButtonBar from './Button';
//import ReduxThunk from 'redux-thunk';
//import reducers from './reducers';
import Router from './Router';
//import { Button } from 'react-native-elements';

class App extends Component {
  
componentWillMount() {
      var config = {
    apiKey: "AIzaSyB2S5EdgGL9X-2JGgKs35LuBtIzQT9JNug",
    authDomain: "enrol-cbd49.firebaseapp.com",
    databaseURL: "https://enrol-cbd49.firebaseio.com",
    projectId: "enrol-cbd49",
    storageBucket: "enrol-cbd49.appspot.com",
    messagingSenderId: "71833671843"
  };
  firebase.initializeApp(config);
  
}

render(){
  return(
    <Router />
  );
}

}

    export default App;