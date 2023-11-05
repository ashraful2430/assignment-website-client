
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <span className="loading flex justify-center items-center h-screen  mx-auto loading-infinity loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;