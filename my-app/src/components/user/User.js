import React, {useState } from 'react';
import useDrinksServer from '../../services/drinksServer';

const User = () => {

    const [drink, setDrink] = useState({
        name: '',
        description: ''
    });

    const {sendDrink} = useDrinksServer();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setDrink({
            ...drink,
            [name]: value,
        })
    }

    const onRequest = (event) => {
        event.preventDefault();
        sendDrink(drink)
    }
    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                <input 
                    type="text" 
                    placeholder='name' 
                    id="name"
                    name='name'
                    onChange={handleInput}
                />
                <input 
                    type="description" 
                    placeholder='description' 
                    id="description"
                    name='description'
                    onChange={handleInput}
                />
                <input 
                    type='submit'
                    onClick={event => onRequest(event)} 
                />
            </form>
        </>
    );
};

export default User