import React from 'react';
import styles from './App.module.css';
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherModule from "./components/WeatherModule/WeatherModule";
import Error from "./components/Error/Error";
import useForecastWeather from "./hooks/useForecastWeather";

const App: React.FC = () => {

    const {forecastWeather, error, sendRequestCityName, deleteWeatherModuleBlock, isErrorFalse} = useForecastWeather();

    const sendCityName = (value: string) => {
        sendRequestCityName(value);
    }
    const deleteBlock = () => {
        deleteWeatherModuleBlock();
    }

    const isError = () => {
        isErrorFalse();
    }

    return (
        <div className={styles.app}>
            <SearchForm error = {error}
                        isError = {isError}
                        deleteBlock = {deleteBlock}
                        sendCityName = {sendCityName} />
            {error && <Error />}
            {forecastWeather && <WeatherModule data = {forecastWeather} />}
        </div>
    );
}

export default App;
