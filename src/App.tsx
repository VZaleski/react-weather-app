import React from 'react';
import styles from './App.module.css';
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherModule from "./components/WeatherModule/WeatherModule";
import Error from "./components/Error/Error";
import useForecastWeather from "./hooks/useForecastWeather";

const App: React.FC = () => {

    const {forecastWeather, error, sendRequestCityName} = useForecastWeather();

    const sendCityName = (value: string) => {
        sendRequestCityName(value);
    }

    return (
        <div className={styles.app}>
            <SearchForm sendCityName = {sendCityName} />
            {error && <Error />}
            {forecastWeather && <WeatherModule />}
        </div>
    );
}

export default App;
