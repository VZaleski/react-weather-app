import {useState} from "react";
import axios, {AxiosAdapter, AxiosResponse} from "axios";

const key: string = '1c5da32bd6a0d1c4c017b21b49833c7f';
const baseUrl: string = 'http://api.openweathermap.org/data/2.5/';

const useForecastWeather = () => {
    const [forecastWeather, setForecastWeather] = useState(false);
    const [error, setError] = useState(false);

    const sendRequestCityName = (city: string) => {
        const dataCity = axios.get(`${baseUrl}/weather`, {params: {q: city, appid: key}})
            .then((resp:AxiosResponse) => {
                const data = resp.data;
                setError(false);
                setForecastWeather(true);
            })
            .catch((resp:AxiosResponse) => {
                setForecastWeather(false);
                setError(true);
            });
    }

    return {
        forecastWeather,
        error,
        sendRequestCityName
    }
}

export default useForecastWeather;