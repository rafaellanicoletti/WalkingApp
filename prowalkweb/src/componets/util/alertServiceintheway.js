import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class App extends React.Component {
    submit = () => {
        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure you want to book this walker?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('GET READY FOR YOUR SERVICE, YOUR WALKER IS ON THE WAY!')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    render() {
        return (
            <div className='container'>
                <button onClick={this.submit}>Book Now</button>
            </div>
        );
    }
}