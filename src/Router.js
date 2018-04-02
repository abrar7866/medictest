import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Screen3, {titleo} from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Inclu from './Inclu';
import IncluExclu from './IncluExclu';
import About from './About';
import Contact from './Contact';
import {Send} from './sender';


const RouterComponent = () => {
    //key can be used in calling Actions.keyname for e.g if the button is clicked move to Actions.keyname
    return(
    <Router>
        <Scene key="root"> 

             <Scene 
                titleStyle={Styles.navigationTitle}
                key="Screen3"
                component={Screen3}
                hideNavBar
                initial
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="Screen4"
                component={Screen4}
                //title=''
                
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="Screen5"
                component={Screen5}
                //title=""
                
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="Inclu"
                component={Inclu}
                //title=""
                
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="IncluExclu"
                component={IncluExclu}
                title="Inclusion/Exclusion"
                
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="About"
                component={About}
                title="About the Study"
                
                
            />

            <Scene 
                titleStyle={Styles.navigationTitle}
                key="Contact"
                component={Contact}
                title="Patient Contact"
                
                
            />
        </Scene>
    </Router>
    );
};

const Styles = {
    navigationTitle: {
        alignSelf: 'center',
        paddingRight: 40
    }
}

export default RouterComponent;
