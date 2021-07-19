import axios from "axios";

const getWeather = (city) => {
    return axios.get(`https://de1ux.com/weather`);
}

export const shouldWearJacket = async (city) => {
    const weather = await getWeather(city);
    console.log(weather);
}
