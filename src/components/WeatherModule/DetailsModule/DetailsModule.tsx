import React from 'react';
import styles from './DetailsModule.module.css'
import cloudImage from './../../../assets/images/cloud.svg'
import {currentTimeFunction} from "../../../additionalFunctions/currentTime";

const DetailsModule: React.FC = () => {

    let himidity: string = '82%';
    let wind: string = '11 KPH SE';
    let airQuality: string = 'Moderate';
    const timeData = currentTimeFunction();
    const weekday = timeData.weekday;
    const hours = timeData.time

    return (
        <div className={styles.blockDetails}>
            <div className={styles.wrapper}>
                <h2 className={styles.blockDetails__title}>Honoi, VN</h2>
                <span className={styles.blockDetails__subtitle}>{weekday} {hours} • Overcast clouds</span>
                <div className={styles.content}>
                    <div className={styles.contentOne}>
                        <img className={styles.contentOne__image} src={cloudImage} alt="image-weather"/>
                        <span className={styles.contentOne__degree}>20°</span>
                        <div className={styles.unit}>
                            <span>F</span>
                            <span className={styles.unitActive}>/</span>
                            <span className={styles.unitActive}>C</span>
                        </div>
                    </div>
                    <div className={styles.contentTwo}>
                        <span>Himidity: {himidity}</span>
                        <span>Wind: {wind}</span>
                        <span>Air Quality: {airQuality}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsModule;