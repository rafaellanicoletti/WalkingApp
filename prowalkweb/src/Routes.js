import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/homePage';
import Login from './containers/loginPage';
import WalkerProfile from './containers/walkerProfilePage';




function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>loginPage</Link>
                        </li>
                        <li>
                            <Link to='/home/'>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/walker/'>Walker Profile</Link>
                        </li>
                    </ul>
            </nav >

        <Route path='/' exact component = { Login } />
        <Route path='/home' exact component = { Home } />
        <Route path='/walker/' component = { WalkerProfile} />
     </div >
    </Router >
 );
}

export default AppRouter;