import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/homePage';
import Login from './containers/loginPage';
import LogoutPage from './containers/logoutPage'
import SignUp from './containers/signupPage'
import WalkerProfile from './containers/walkerProfilePage';




function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/login/'>login Page</Link>
                        </li>
                        <li>
                            <Link to='/home/'>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/walker/'>Walker Profile</Link>
                        </li>
                        <li>
                            <Link to='/logout/'>Log Out</Link>
                        </li>
                        <li>
                            <Link to='/signup/'>Sign up</Link>
                        </li>
                    </ul>
            </nav >

        <Route path='/login' exact component = { Login } />
        <Route path='/home' exact component = { Home } />
        <Route path='/logout' exact component = { LogoutPage } />
        <Route path='/walker' component = { WalkerProfile} />
        <Route path='/signup' component = { SignUp} />
     </div >
    </Router >
 );
}

export default AppRouter;