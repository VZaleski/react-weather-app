import React, {useState} from 'react';
import styles from './DetailsModule.module.css'
import {currentTimeFunction} from "../../../additionalFunctions/currentTime";
import {getWeatherData} from "../../../additionalFunctions/currentDataDetailsModule";
import {convertCelsiusToFahrenheit} from '../../../additionalFunctions/convertCelsiusToFahrenheit'

interface props {
    data: {
        name: string,
        country: string,
        current: {
            weather: { icon: string, description: string }[],
            humidity: string,
            temp: string,
            wind_deg: string,
            wind_speed: string,
        },
        list: { main: { aqi: string } }[],
    }
}

const DetailsModule: React.FC<props> = ({data}) => {

    const dataCurrentWeather = getWeatherData(data);

    const humidity: string = dataCurrentWeather.humidity;
    const wind: string = dataCurrentWeather.wind;
    const airQuality: string = dataCurrentWeather.airQuality;
    const currentWeatherIcon = dataCurrentWeather.icon;
    const city: string = dataCurrentWeather.city;
    const country: string = dataCurrentWeather.country;
    const description: string = dataCurrentWeather.description;

    const timeData = currentTimeFunction();
    const weekday = timeData.weekday;
    const hours = timeData.time;
    let temperature = dataCurrentWeather.temperature;
    
    let [deg, setDeg] = useState(temperature);
    let [fahrClassName, setFahrClassName] = useState('');
    let [celsClassName, setCelsClassName] = useState(`${styles.unitActive}`);

    const convertToFahrenheit = () => {
        deg = convertCelsiusToFahrenheit(temperature);
        fahrClassName = `${styles.unitActive}`;
        celsClassName = '';
        setFahrClassName(fahrClassName);
        setCelsClassName(celsClassName);
        setDeg(deg);
    }

    const convertToCelsius = () => {
        deg = temperature;
        fahrClassName = '';
        celsClassName = `${styles.unitActive}`;
        setFahrClassName(fahrClassName);
        setCelsClassName(celsClassName);
        setDeg(deg);
    }

    return (
        <div className={styles.blockDetails}>
            <div className={styles.wrapper}>
                <h2 className={styles.blockDetails__title}>{city}, {country}</h2>
                <span className={styles.blockDetails__subtitle}>{weekday} {hours} • {description}</span>
                <div className={styles.content}>
                    <div className={styles.contentOne}>
                        <img className={styles.contentOne__image} src={currentWeatherIcon} alt="image-weather"/>
                        <span className={styles.contentOne__degree}>{deg}°</span>
                        <div className={styles.unit}>
                            <span onClick={convertToFahrenheit} className={fahrClassName}>F</span>
                            <span className={styles.unitActive}>/</span>
                            <span onClick={convertToCelsius} className={celsClassName}>C</span>
                        </div>
                    </div>
                    <div className={styles.contentTwo}>
                        <span>Humidity: {humidity}</span>
                        <span>Wind: {wind}</span>
                        <span>Air Quality: {airQuality}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsModule;