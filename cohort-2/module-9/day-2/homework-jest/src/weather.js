import axios from "axios";


export const getWeather = async (city) => {
    return axios.get(`https://de1ux-weather-backend.herokuapp.com/weather?city=${city}`)
        .then(response => response.data);
}

export const shouldWearJacket = async (city) => {
    const weather = await getWeather(city);

    // Part 1 -- if the weather is <50 farenheit, return True!
    // Note: the de1ux-weather-backend API returns temperature in kelvins

    return weather;
}
