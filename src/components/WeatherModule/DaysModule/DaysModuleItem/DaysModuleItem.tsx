import React from 'react';
import styles from './DaysModuleItem.module.css'
import imageItem from './../../../../assets/images/cloud.svg'

const DaysModuleItem: React.FC = () => {

    return (
        <div className={styles.item} >
            <h3 className={styles.item__title}>Sun</h3>
            <img className={styles.item__image} src={imageItem} alt=""/>
            <span className={styles.item__max} >22°</span>
            <span className={styles.item__min}>16°</span>
        </div>
    );
}

export default DaysModuleItem;