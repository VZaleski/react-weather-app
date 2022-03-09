import React from 'react';
import styles from './WeatherModule.module.css'
import DetailsModule from "./DetailsModule/DetailsModule";
import DaysModule from "./DaysModule/DaysModule";

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
        daily: {
            temp: {
                max: number,
                min: number
            },
            weather: {
                icon: string
            }[],
        }[],
    }
}

const WeatherModule: React.FC<props> = ({data}) => {
    return (
        <div className={styles.weatherModule}>
            <DetailsModule data = {data} />
            <DaysModule data = {data}  />
        </div>
    );
}

export default WeatherModule;