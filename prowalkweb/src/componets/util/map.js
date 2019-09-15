import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import affiliatesObject from './../../data/walkerInfo/affiliatesInfo.js';
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
                affiliatesObject.affiliates.map(e =>
                    <Marker sty style={{width:10, height:10, borderRadius: 5,}} icon={e.pictureProfile} key={e.id} position={{ lat: e.latitude, lng: e.longitude }} />
                )
            }
        </GoogleMap>
    );

    const WrappedMap = withScriptjs(withGoogleMap(Map))

    return (
        <div style={{ width: '50vw', height: '50vh' }}>
            <WrappedMap googleMapURL={URL}
                
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />

        </div>
    );
}
