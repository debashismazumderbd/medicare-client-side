import React from 'react';
import useAuth from '../../LoginHooks/useAuth';

const Login = () => {
    const {SigninUsingGoogle}=useAuth()
    return (
        <div>
            <h2>please Login:</h2>
            <button onClick={SigninUsingGoogle}  className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;