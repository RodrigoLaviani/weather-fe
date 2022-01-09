import React, { useEffect, useState } from 'react';
import { Input, WeatherContainer, SelectorContainer } from './index';
import '../assets/stylesheets/app.scss';
import { useWeatherGeoLocation } from '../shared/customHooks/useWeatherGeoLocation';

const App = () => {
    const [weathers, setWeathers] = useState([]);
    const [currentWeather, setCurrentWeather] = useState({});
    const { getWeathers } = useWeatherGeoLocation();

    useEffect(() => {
        if (!weathers.length) {
            const { currentWeatherGeoLocation, weathersGeoLocation } = getWeathers();
            if (currentWeatherGeoLocation && weathersGeoLocation) {
                setCurrentWeather(currentWeatherGeoLocation);
                setWeathers(weathersGeoLocation);
            }
        }
    }, [])

    return (
        <div className='app-container'>
            <h1 className='title'>Weather Now</h1>
            <Input></Input>
            <SelectorContainer></SelectorContainer>
            <WeatherContainer></WeatherContainer>
        </div>
    );
};

export default App;