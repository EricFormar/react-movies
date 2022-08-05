import React, { Fragment, useEffect} from 'react';
import {Redirect} from 'react-router-dom';


const PrivateRoute = ({children,token, setToken}) => {
    useEffect(() => {
        const storageToken = localStorage.getItem('_Token');
        setToken(storageToken)
    }, [token]);

    return <Fragment>{token ? children : <Redirect to='/signin'/>} </Fragment>
}

const PublicRoute = ({children,token, setToken}) => {
    useEffect(() => {
        const storageToken = localStorage.getItem('_Token');
        setToken(storageToken)
    }, [token]);

    return <Fragment>{!token ? children : <Redirect to='/'/>} </Fragment>
}

const AuthProvider = {
    PrivateRoute,
    PublicRoute
}

export default AuthProvider;
