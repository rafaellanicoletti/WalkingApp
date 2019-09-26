
import React, { Component } from 'react';
import axios from 'axios';
import Map from '../../componets/util/map';
import { Link, Redirect } from 'react-router-dom';
import './loginPage.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            redirect: false
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({ error: '' });
    }

    componentDidMount() {
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (user) {
            this.setState({ redirect: true })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home' />
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        axios.post("/signup",
            {
                email: this.state.username,
                password: this.state.password,
            }).then(response => {
                window.localStorage.setItem('user', response.config.data);
                this.setState({ redirect: true })
            }).catch(error => {
                return this.setState({ error: 'Username or Password is Incorrect' });
            })
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
        return (
            <div>
                {this.renderRedirect()}
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

                    {/* <input type="submit" value="Log In" data-test="submit" /> */}
                    {/* <button type='submit'>Continue</button> this button was used previously just keeping it here in case something doesnt work. */}
                    {/* <Link to='/home'>SUBMIT</Link> */}
                    {/* adding a passwordDiv */}
                    <div className="passwordDiv">
                        <input className="passwordInput" placeholder="password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                    </div>

                    {/* <input type="submit" value="Log In" data-test="submit" /> */}
                    {/* <div className="submitDiv">
                        <Link className="submitDiv2" to='/home'>SUBMIT</Link>
                    </div> */}

                    <input className="submitDiv2" value="Submit" type="submit" />


                </form></div>
                <div className="map">
                    <Map />
                </div>
            </div>

        );
    }
}

