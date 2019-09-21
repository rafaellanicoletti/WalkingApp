import React from 'react'; 
import {Component} from 'react';
import Map from '../../componets/util/map';
import { Link } from 'react-router-dom'
import './loginPage.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "",
            error:""
         };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({ error: '' });
    }


    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }
    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return(
            <div>
                {/* adding a login div so I can position it to the left with color gradient */}
                <div className="login"><form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }

                    {/* adding a usernameDiv so I can position it */}
                    <div className="usernameDiv">
                        <input className="loginInput" placeholder="username" type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                    </div>

                    {/* adding a passwordDiv */}
                    <div className="passwordDiv">
                        <input className="passwordInput" placeholder="password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                    </div>

                    {/* <input type="submit" value="Log In" data-test="submit" /> */}
                    <div className="submitDiv">
                        <Link className="submitDiv2" to='/home'>SUBMIT</Link>
                    </div>


                </form></div>
                <div className="map">
                    <Map />
                </div>  
            </div>

        );
    }
}

