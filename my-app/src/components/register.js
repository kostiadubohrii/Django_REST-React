import React, { useEffect, useState } from 'react';
import useDrinksServer from '../services/drinksServer';

const Register = () => {

    const [users, setUsers] = useState([]);

    const {getUsers} = useDrinksServer();

    useEffect(() => {
        getUsers()
        .then(onUserLoaded);
    },[]);

    const onUserLoaded = (data) => {
        setUsers(items => data)
    }

    return (
        <>
            this is Register
        </>
    )
}


export default Register