import React from 'react';
import styles from './WeatherModule.module.css'
import DetailsModule from "./DetailsModule/DetailsModule";
import DaysModule from "./DaysModule/DaysModule";

interface props {
    data: object
}

const WeatherModule: React.FC<props> = ({data}) => {
    console.log(data);
    return (
        <div className={styles.weatherModule}>
            <DetailsModule />
            <DaysModule />
        </div>
    );
}

export default WeatherModule;