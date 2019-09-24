import React from 'react'
import { Link } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import affiliatesObject from '../../data/walkerInfo/affiliatesInfo.js';
import Addressline from '../util/addressline'

export default function Map(props) {
    const { location, showMarkers} = props;
    const key = 'AIzaSyBhHbOzEagXSNiH8ijFeZ415GRo3unB7U4';
    const URL = `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`

    const Map = () => (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={ { lat: 40.730610, lng: -73.935242 }}
       
    >
            {location && <Marker position={{ lat: location.latitude, lng: location.longitude }} />}
            {
                showMarkers &&
                affiliatesObject.affiliates.map(affiliate =>
     
                        <Marker 
                    //     options={{ style: { width: 50, height: 50, borderRadius: 2, }}} 
                        icon={{ url: affiliate.pictureProfile, anchor: { x: 10, y: 10 }, scaledSize: { width: 40, height: 30 }, borderRadius:50}}
                        onClick={() => {

                            window.location.href = "/walker/" + affiliate.id;
                        }}
                        key={affiliate.id} 
                        position={{ lat: affiliate.latitude, lng: affiliate.longitude }} 
                       
                        />
                )
            }
            <Addressline location={{ lat: 40.730610, lng: -73.935242 }} affiliate={{
                "lat": 40.760663,
                "lng": -73.971879,
            }} />
        </GoogleMap>
    );

 
    const WrappedMap = withScriptjs(withGoogleMap(Map))

    function MatchWalker({match}){
        return "walkers/" +`${match.params.id}`
    };
    
    return (
        <div style={{ width: '80vw', height: '60vh' }}>
            <WrappedMap googleMapURL={URL}
                
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />

            
        </div>
    );
}
