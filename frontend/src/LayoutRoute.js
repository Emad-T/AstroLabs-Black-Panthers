import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar'

let headerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Bookings', path: '/bookings'},
 ]
  
let footerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Bookings', path: '/bookings'},
    {label: 'FAQs', path:'/faqs'},
    {label: 'Terms & Conditions', path: '/terms-and-conditions'}
]
  
function LayoutRoute(props) {
    return(
        <div>
            <NavBar links={headerLinks} theme="dark" />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <NavBar links={footerLinks} theme="dark" />
        </div>
    )
}

export default LayoutRoute;