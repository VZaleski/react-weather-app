import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {log} from "util";

const key: string = '1c5da32bd6a0d1c4c017b21b49833c7f';
const exclude: string = 'hourly,minutely,alerts';
const baseUrl: string = 'http://api.openweathermap.org/data/2.5/';
const coordinatesUrl: string = 'http://api.openweathermap.org/geo/1.0/';

const useForecastWeather = () => {
    let [forecastWeather, setForecastWeather] = useState(null);
    let [error, setError] = useState(false);

    const getCoordinates = (city: string) => {
       return axios.get(`${coordinatesUrl}/direct`, {params: {q: city, appid: key}})
    }

    const getAirPollution = (object: object, lat: string, lon: string) => {
        return axios.get(`${baseUrl}/air_pollution`, {params: {lat: lat, lon: lon, appid: key}})
    }

    const getForecastWeatherSevenDays = (object: object, lat: string, lon: string, part: string) => {
        return axios.get(`${baseUrl}/onecall`, {params: {lat: lat, lon: lon, exclude: part, appid: key}})
    }

    const sendRequestCityName = (city: string) => {
        getCoordinates(city)
            .then((resp1) => {
                forecastWeather = resp1.data;
                console.log(forecastWeather);
                const lat: string = resp1.data[0].lat;
                const lon: string = resp1.data[0].lon;
                getAirPollution(resp1.data, lat, lon)
                    .then((resp2) => {
                        forecastWeather = Object.assign(forecastWeather, resp2.data);
                        console.log(forecastWeather);
                        getForecastWeatherSevenDays(resp2.data, lat, lon, exclude)
                            .then((resp3) => {
                                forecastWeather = Object.assign(forecastWeather, resp3.data);
                                console.log(forecastWeather);
                                setError(false);
                                setForecastWeather(forecastWeather);
                            })
                            .catch(() => {
                                setForecastWeather(null);
                                setError(true);
                            })
                    })
                    .catch(() => {
                        setForecastWeather(null);
                        setError(true);
                    })
            })
            .catch(() => {
                setForecastWeather(null);
                setError(true);
            })
    }

    return {
        forecastWeather,
        error,
        sendRequestCityName
    }
}

export default useForecastWeather;