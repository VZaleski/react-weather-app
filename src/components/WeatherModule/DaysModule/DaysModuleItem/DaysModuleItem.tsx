import React from 'react';
import styles from './DaysModuleItem.module.css'
import imageItem from './../../../../assets/images/cloud.svg'

interface props {
    min: string,
    max: string,
    icon: string,
    weekday: string,
}

const DaysModuleItem: React.FC<props> = ({min, max, icon,weekday}) => {
    return (
        <div className={styles.item} >
            <h3 className={styles.item__title}>{weekday}</h3>
            <img className={styles.item__image} src={icon} alt=""/>
            <span className={styles.item__max} >{max}°</span>
            <span className={styles.item__min}>{min}°</span>
        </div>
    );
}

export default DaysModuleItem;