import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Map from '../../componets/util/map';
import Search from '../../componets/util/search';
// import affiliatesObject from './../../data/walkerInfo/affiliatesInfo.json';
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
            address: "",
            affiliatesObject: { affiliates: [] },
            showMarkers: false,
            redirect: false

        }
    }
    componentDidMount() {
        // Get affiliate from db
        // let dataFromDatabase = affiliatesObject;
        // console.log(dataFromDatabase)
        // this.setState({
        //     affiliatesObject: dataFromDatabase
        // })
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (!user){
            this.setState({redirect: true})
        }
    }
    

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }


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
                    },
                    showMarkers: true
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
            // .then(results => {
            //     console.log(results)
            //     return getLatLng(results[0])
            // })
            .then(results => {
                console.log(results);
                let formatedAddress = results[0].formatted_address;
                this.setState({
                    address: formatedAddress
                })
                return getLatLng(results[0])
            })
            .then(latLng => {
                console.log(latLng)
                this.setState({
                    location: {
                        latitude: latLng.lat,
                        longitude: latLng.lng
                    }
                })
            })

            .catch(error => console.error('Error', error));

    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h1>HOME PAGE</h1>

                <Search
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    // onUserLocationInput={this.handleUserLocationInput} 
                    onCurrentUserLocation={this.handleCurrentUserLocation}
                />

                <div className="map">
                    <Map
                        location={this.state.location}
                        showMarkers={this.state.showMarkers}
                        // affiliatesObject={this.state.affiliatesObject}
                    // defaultCenter={{ lat: this.state.location.latitude, lng: this.state.location.longitude}}
                    />
                </div>
            </div>

        );
    }
}


