import {useState} from "react";
import axios, {AxiosAdapter, AxiosResponse} from "axios";

const key: string = '1c5da32bd6a0d1c4c017b21b49833c7f';
const baseUrl: string = 'http://api.openweathermap.org/data/2.5/';

const useForecastWeather = () => {
    let [forecastWeather, setForecastWeather] = useState(null);
    let [error, setError] = useState(false);

    const sendRequestCityName = (city: string) => {
       axios.get(`${baseUrl}/weather`, {params: {q: city, appid: key}})
            .then((resp:AxiosResponse) => {
                let data = resp.data;
                setError(false);
                setForecastWeather(data);
            })
            .catch((resp:AxiosResponse) => {
                setForecastWeather(null);
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