import React from 'react';
import styles from './DetailsModule.module.css'
import cloudImage from './../../../assets/images/cloud.svg'

const DetailsModule: React.FC = () => {

    return (
        <div className={styles.blockDetails}>
            <div className={styles.wrapper}>
                <h2 className={styles.blockDetails__title}>Honoi, VN</h2>
                <span className={styles.blockDetails__subtitle}>Sunday 9AM • Overcast clouds</span>
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
                        <span>Himidity: <span>82%</span></span>
                        <span>Wind: <span>11 KPH SE</span></span>
                        <span>Air Quality: <span>Moderate</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsModule;