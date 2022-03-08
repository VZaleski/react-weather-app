import React from 'react';
import styles from './WeatherModule.module.css'
import DetailsModule from "./DetailsModule/DetailsModule";
import DaysModule from "./DaysModule/DaysModule";

interface props {
    data: object
}

const WeatherModule: React.FC<props> = ({data}) => {
    return (
        <div className={styles.weatherModule}>
            <DetailsModule data = {data} />
            <DaysModule />
        </div>
    );
}

export default WeatherModule;