import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map'


export default class HomePage extends Component {
    

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <div className="map">
                    <Map />
                </div>
            </div>

        );
    }
}

