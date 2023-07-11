import React, { useEffect, useState } from 'react';
import useDrinksServer from '../../services/drinksServer'

import {Link} from 'react-router-dom';
import IMG_ERROR_NO_FOUND from '../../resources/img/IMG_ERROR_NOT_FOUND.jpg'

const ApiComponent = () => {
    const [items, setItems] = useState([]);
    const [term, setTerm] = useState('');

    const {getAllDrinks} = useDrinksServer();

    useEffect(() => {
        getAllDrinks()
        .then(onDrinkLoaded);
    },[]);
    
    const onDrinkLoaded = (data) => {
        setItems(items => data)
    }

    const searchDrink = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const setSearchTerm = (e) => {
        setTerm(term => e.target.value)
    }
    

    const drinksSearch = searchDrink(items, term);

    function validateImage(item){
        if (item.image === 'http://127.0.0.1:8000//media/Images/None/No0img.jpg'){
            return <img src={IMG_ERROR_NO_FOUND} alt='IMAGENOTFOUND'  width={350}/>
        }
        console.log(item.image)

        return <img src={item.image} alt={item.name}  width={350}/>
    }
    
  return (

    <div>
        <form action="#">
            <input type="text" placeholder='enter cocktail' onInput={setSearchTerm}/>
        </form>


        {drinksSearch.map(item => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.descr}</p>
                <Link to={`/drink/${item.id}`}>
                    {validateImage(item)}
                </Link>
            </div>
        ))}

    </div>
  );
};

export default ApiComponent;