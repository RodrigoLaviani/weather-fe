export const formattedForecastWeatherApiResponse = (data) => {
    return data.daily.map(weather => formattedWeather(weather)).slice(0, 5);
}

export const formattedWeatherFromLocation = (data) => {
    return {
        latitude: data.coord.lat,
        longitude: data.coord.lon
    }
}

export const formattedGeoLocation = (data) => {
    return {
        name: data.name,
        icon: data.weather[0].icon,
        temp_min: `${data.temp.min.toFixed(1)}°C`,
        temp_max: `${data.temp.max.toFixed(1)}°C`,
        latitude: data.coord.lat,
        longitude: data.coord.lon
    }
}

const formattedWeather = (data) => {
    return {
        icon: data.weather[0].icon,
        description: capitalCase(data.weather[0].description),
        temp_min: `${data.temp.min.toFixed(1)}°C`,
        temp_max: `${data.temp.max.toFixed(1)}°C`,
        humidity: `${data.humidity}%`,
    }
}

function capitalCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}