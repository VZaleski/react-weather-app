import React from 'react';
import styles from './DaysModule.module.css'
import DaysModuleItem from "./DaysModuleItem/DaysModuleItem";
import {dataDaysModule} from "../../../additionalFunctions/dataDaysModule";

interface props {
    data: {
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

const DaysModule: React.FC<props> = ({data}) => {

    const newData = dataDaysModule(data);
    const lengthArray: number = 8;
    const arrayDaysModuleItem = new Array(lengthArray);
    for (let i = 0; i < lengthArray; i++) {
        arrayDaysModuleItem.push(<DaysModuleItem min = {newData.arrayMinTemp[i]}
                                                 max = {newData.arrayMaxTemp[i]}
                                                 icon = {newData.arrayIcons[i]}
                                                 weekday = {newData.arrayWeekday[i]} />)
    }

    return (
        <div className={styles.DaysModule}>
            {arrayDaysModuleItem}
        </div>
    );
}

export default DaysModule;