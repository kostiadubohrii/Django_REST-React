import React from 'react';
import ApiComponent from './components/main';
import Drink from './pages/DrinkInfo';
import User from './components/user';
import Register from './components/register';

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
                    <Route path='/users' element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
