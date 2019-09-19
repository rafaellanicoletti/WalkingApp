import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
// import {
//     geocodeByAddress,
//     geocodeByPlaceId,
//     getLatLng,
// } from 'react-places-autocomplete';


// export default function search(props) {
//     const { onUserLocationInput, onCurrentUserLocation } = props;


//     return (
//         <div>
//             <input type="text" onChange={onUserLocationInput}></input>
//             <button style={{position: 'absolute'}}onClick={onCurrentUserLocation}>Location</button>
//         </div>
//     )
// }

export default class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    // handleChange = address => {
    //     this.setState({ address });
    // };

    // handleSelect = address => {
    //     geocodeByAddress(address)
    //         .then(results => getLatLng(results[0]))
    //         .then(latLng => console.log('Success', latLng))
    //         .catch(error => console.error('Error', error));
    // };

    render() {
        return (
            <PlacesAutocomplete
                // value={this.state.address}
                // onChange={this.handleChange}
                // onSelect={this.handleSelect}
                value={this.props.value}
                onChange={this.props.onChange}
                onSelect={this.props.onSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                //console.log(suggestions)
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={this.props.onCurrentUserLocation}>Location</button>
                        <div>
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

        );
    }
}
