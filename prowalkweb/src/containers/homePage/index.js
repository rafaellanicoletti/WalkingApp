import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map';
import Search from '../../componets/util/search';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

export default class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            location: null,
            address: ""

        }
    }
    // componentDidMount() {
        

    // }

    handleCurrentUserLocation = () => {
        console.log('clicked')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
console.log(position)
                this.setState({
                    location: {
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    }
                })
            });
        }
    }

    // handleUserLocationInput = (location) => {
    //     // this.setState({ location })
    //     console.log("location", location)
    // }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {

        geocodeByAddress(address)
            .then(results => {
                console.log(results)
                getLatLng(results[0])
            }
                )
            .then(latLng =>{
                console.log(latLng)
                this.setState({
                    location: {
                        latitude: latLng.lat,
                        longitude: latLng.lng
                    }
                })
            } )

            .catch(error => console.error('Error', error));
        
    };

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>

                <Search 
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                    // onUserLocationInput={this.handleUserLocationInput} 
                    onCurrentUserLocation={this.handleCurrentUserLocation}
                /> 

                <div className="map">
                    <Map location={this.state.location} />
                </div>
            </div>

        );
    }
}

