import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../layout/navbar/navbar';
// import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
// import Artist from '../pages/artist/artist';
// import Works from '../pages/works/works';
import Hide from '../pages/hide-content/hide'; // HIDE CONTENT VERSION

const Routes = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Hide />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/artist'>
                    <Hide />
                </Route>
                <Route path='/VirtualExhibit'>
                    <Hide />
                </Route>
                {/* UNHIDE CONTENT VERSION */}
                {/* <Route path='/artist' component={Artist} />
                <Route path='/artist/:id' component={Artist} />
                <Route path='/VirtualExhibit' component={Works} /> */}
            </Switch>
        </Router>
       
    )
}

export default Routes;