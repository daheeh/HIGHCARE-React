import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginVerify from '../utils/LoginVerify';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            LoginVerify() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;