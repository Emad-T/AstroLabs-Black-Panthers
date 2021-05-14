import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LayoutRoute from './LayoutRoute';
import BookingsScreen from './BookingsScreen';

function App() {
    //doesnt return UI components anymore, now used as a router
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen}/>
                <LayoutRoute path="/about" exact={true} component={AboutScreen}/>
                <LayoutRoute path="/bookings" exact={true} component={BookingsScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;