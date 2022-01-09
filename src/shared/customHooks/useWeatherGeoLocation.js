import { useState, useEffect } from "react";
import { useGeoLocation } from "./useGeoLocation";
import weatherService from "../services/weatherService";

export const useWeatherGeoLocation = () => {
    const [weathers, setWeathers] = useState([]);
    const [currentWeather, setCurrentWeather] = useState({});
    const { location } = useGeoLocation();

    useEffect(() => {
        const setGeoLocation = () => {
            const weatherGeoLocation = weatherService.getForecastWeatherFromGeoLocation(location);
            const currentWeatherGeoLocation = weatherService.getCurrentWeatherFromGeoLocation(location);
            !weatherGeoLocation && setWeathers(weatherGeoLocation);
            !currentWeatherGeoLocation && setCurrentWeather(currentWeatherGeoLocation);
        }
        location.hasOwnProperty('latitude') && setGeoLocation();
    }, [location]);

    const getWeathers = () => {
        return {
            currentWeatherGeoLocation: currentWeather,
            weathersGeoLocation: weathers
        }
    }

    return { getWeathers }
}