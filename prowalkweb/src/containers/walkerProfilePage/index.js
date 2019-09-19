import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map';
import WalkerCard from '../../componets/util/walkerCard';
// import ServiceConfirmation from '../../componets/util/confirmationAlert'


export default class WalkerPage extends Component {
    
    render() {
        return (
            <div>
                <h1>WALKER PAGE</h1>
                {/* <div className="map">
                    <Map />
                </div> */}
                <WalkerCard />
                {/* <ServiceConfirmation/> */}
            </div>

        );
    }
}

