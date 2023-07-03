import React, { useEffect, useState } from 'react';
import useDrinksServer from '../services/drinksServer';
import {useParams} from 'react-router-dom';
import IMG_ERROR_NO_FOUND from '../resources/img/IMG_ERROR_NOT_FOUND.jpg'

const Drink = () => {
    const {drinkId} = useParams();
    const [drink, setDrink] = useState();

    const {getDrink} = useDrinksServer();
    
    useEffect(() => {
        updateDrink();
    }, [drinkId]);

    const updateDrink = () => {
        getDrink(drinkId)
        .then(onDrinkLoaded)
    };

    const onDrinkLoaded = (drink) => {
        setDrink(drink)
    }

    const content = <View drink={drink}/>

    return (
        <>
            {content}
        </>
    );
};


const View = ({drink}) => {
    if (!drink){
        return null
    }
    const {name, descr, image} = drink;

    function validateImage(image, name){
        if (image === 'http://127.0.0.1:8000//media/Images/None/No0img.jpg'){
            return <img src={IMG_ERROR_NO_FOUND} alt='IMAGENOTFOUND'  width={350}/>
        }

        return <img src={`${image}`} alt={name} width={350}/>
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{descr}</p>
            {validateImage(image, name)}
        </div>
    )
}


export default Drink