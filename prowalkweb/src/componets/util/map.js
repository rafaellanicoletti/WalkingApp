import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

export default function map() {
    function Map() {
        return (<GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.730610, lng: -73.935242 }}
        />
        );
    }
    const WrappedMap = withScriptjs(withGoogleMap(Map))
        return (
            <div style={{ width: '50vw', height: '50vh' }}>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBhHbOzEagXSNiH8ijFeZ415GRo3unB7U4`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />

            </div>
        );
}
