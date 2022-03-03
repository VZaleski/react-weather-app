import React from 'react';
import styles from './WeatherModule.module.css'
import DetailsModule from "./DetailsModule/DetailsModule";
import DaysModule from "./DaysModule/DaysModule";

const WeatherModule: React.FC = () => {

    return (
        <div className={styles.weatherModule}>
            <DetailsModule />
            <DaysModule />
        </div>
    );
}

export default WeatherModule;