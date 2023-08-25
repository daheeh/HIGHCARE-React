import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginVerify from '../utils/LoginVerify';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Show the component only when the user is logged in
    // Otherwise, navigate to the /login page
    return (
        <Route
            {...rest}
            element={<Element />} // Render the provided element
            case={LoginVerify() ? undefined : () => <Navigate to="/login" />} // Navigate if not logged in
        />
    );
};

export default PrivateRoute;