
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Lottie from 'lottie-react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import animation from '../assets/Animation - 1699204818727.json'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <Lottie className='w-96 mx-auto' animationData={animation}></Lottie>
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