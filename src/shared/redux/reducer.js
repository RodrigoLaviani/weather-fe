const initialState = {
    state: {
        weatherRecords: [],
        forecastWeather: []
    }
  }
  
export default function reducer(state = initialState, action) {
switch (action.type) {
    case 'ADD_WEATHER_IN_RECORD':
        const records = weatherRecords.unshift(action.detail)
        return {
            ...state,
            weatherRecords: records > 5 ? weatherRecords.slice(0, 5) : weatherRecords
        }
    case 'VIEW_FORECAST':
        return {
            ...state,
            forecastWeather: action.detail
        }
    default:
    return state
}
}