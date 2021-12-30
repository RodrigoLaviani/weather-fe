import React from 'react';
import { Input, WeatherContainer, SelectorContainer } from './index';
import '../assets/stylesheets/app.scss';

const App = () => {

    return (
        <div className='app-container'>
            <h1>Weather Now</h1>
            <Input></Input>
            <SelectorContainer></SelectorContainer>
            <WeatherContainer></WeatherContainer>
        </div>
    );
};

export default App;