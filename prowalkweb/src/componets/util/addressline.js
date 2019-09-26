/*global google*/
import React from 'react'
const { compose, withProps, lifecycle } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} = require("react-google-maps");

export default compose(
    // withProps({
    //     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    //     loadingElement: <div style={{ height: `100%` }} />,
    //     containerElement: <div style={{ height: `400px` }} />,
    //     mapElement: <div style={{ height: `100%` }} />,
    // }),
    // withScriptjs,
    // withGoogleMap,
    lifecycle({
        componentDidMount() {
            console.log(this.props)
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: this.props.affiliate,
                destination: this.props.location,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    // <GoogleMap
    //     defaultZoom={7}
    //     defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    // >
        <DirectionsRenderer directions={props.directions}/>
    // </GoogleMap>
);

