import React from 'react';
import styles from './Error.module.css'
import errorImage from '../../assets/images/error_cloud.svg'

const Error: React.FC = () => {

    return (
        <div className={styles.error}>
            <img className={styles.error__image} src={errorImage} alt="Error"/>
            <span className={styles.error__text}>We could not find weather information for the location above</span>
        </div>
    );
}

export default Error;