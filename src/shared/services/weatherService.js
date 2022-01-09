import { BASE_URL, UNITS, API_KEY, EXCLUDE, BASE_URL_ICONS } from "../constants/weather";
import { formattedForecastWeather, formattedGeoLocation, formattedLocation } from "../helpers/weatherHelper";

const getCurrentWeatherFromLocation = (location) => {
    fetch(`${BASE_URL}/weather?q=${location}&units=${UNITS}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            return data.cod && data.cod === '400' ? null : formattedLocation(data);
        } );
}

const getCurrentWeatherFromGeoLocation = (geoLocation) => {
    fetch(`${BASE_URL}/weather?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&units=${UNITS}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            return data.cod && data.cod === '400' ? null : formattedGeoLocation(data);
        } );
}

const getForecastWeatherFromGeoLocation = (geoLocation) => {
    fetch(`${BASE_URL}/onecall?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&units=${UNITS}&exclude=${EXCLUDE}&lang=es&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            return data.cod && data.cod === '400' ? null : formattedForecastWeather(data);
        });
}

const getIcon = (icon) => `${BASE_URL_ICONS}${icon}`;

export default { getCurrentWeatherFromLocation, getForecastWeatherFromGeoLocation, getCurrentWeatherFromGeoLocation, getIcon }