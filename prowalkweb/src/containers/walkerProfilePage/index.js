import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map';
import WalkerProfile from '../../componets/walkerOverlay';
import WalkConfirmation from '../../componets/util/walkConfirmation';


// import ServiceConfirmation from '../../componets/util/confirmationAlert'


export default class WalkerPage extends Component {
    
    render() {
        return (
            <div>
                <div>
                <h1>WALKER PAGE</h1>
                
                <WalkerProfile />
                
                </div>
                <div>
                    <Map/>
                </div>
                <div>
                    <WalkConfirmation />
                </div>
            </div>

        );
    }
}

