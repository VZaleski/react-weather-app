import React from 'react';
import styles from './DaysModule.module.css'
import DaysModuleItem from "./DaysModuleItem/DaysModuleItem";

const DaysModule: React.FC = () => {

    const lengthArray: number = 8;
    const arrayDaysModuleItem = new Array(lengthArray);
    for (let i = 0; i < lengthArray; i++) {
        arrayDaysModuleItem.push(<DaysModuleItem />)
    }

    return (
        <div className={styles.DaysModule}>
            {arrayDaysModuleItem}
        </div>
    );
}

export default DaysModule;