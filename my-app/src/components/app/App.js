import React from 'react';
import ApiComponent from '../apiComponent/ApiComponent';
import Drink from '../../pages/DrinkInfo'
import User from '../user/User';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
            <h1>Fetching Data from Django REST API</h1>
                <Routes>
                    <Route path="/" element={<ApiComponent />}/>
                    <Route path="/drink/:drinkId" element={<Drink/>}/>
                    <Route path='/user' element={<User/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
