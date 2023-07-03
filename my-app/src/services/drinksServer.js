import axios from 'axios';


const useDrinksServer = () => {
    const _apiBase = 'http://127.0.0.1:8000/';

    const getAllDrinks = async () => {
        try {
            const response = await axios.get(`${_apiBase}drinks/`);
            return response.data.map(_transformDrinks)
        } catch (error) {
            console.error(error);
            return []
        }
    };

    const getDrink = async (id) => {
        const response = await axios.get(`${_apiBase}drinks/${id}`);
        return _transformDrinks(response.data) 
    };

    const sendDrink = async (data) => {
        axios.post(`${_apiBase}drinks/`,{
            ...data
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })

    }
    

    const _transformDrinks = (drink) => {
        return {
            id: drink.id, 
            name: drink.name,
            descr: !drink.description ? "This drink has no description yet": drink.description,
            image: `${_apiBase}${drink.image}`,
        }
    }

    return {
        getAllDrinks,
        getDrink,
        sendDrink,
    }
}

export default useDrinksServer