import React from 'react';
import { Component } from 'react';

export default class LogoutPage extends Component {

    render() {
        return(
            <div>
            {window.localStorage.clear()}
                <h1>YOURE Logged OUT!</h1>
            </div>
        )
    }

}
