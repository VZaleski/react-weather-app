import React from 'react';
import styles from './DaysModule.module.css'
import DaysModuleItem from "./DaysModuleItem/DaysModuleItem";
import {dataDaysModule} from "../../../additionalFunctions/dataDaysModule";

interface props {
    data: any
}

const DaysModule: React.FC<props> = ({data}) => {

    const newData = dataDaysModule(data);
    console.log(newData)
    const lengthArray: number = 8;
    const arrayDaysModuleItem = new Array(lengthArray);
    for (let i = 0; i < lengthArray; i++) {
        arrayDaysModuleItem.push(<DaysModuleItem min = {newData.arrayMinTemp[i]}
                                                 max = {newData.arrayMaxTemp[i]}
                                                 icon = {newData.arrayIcons[i]} />)
    }

    return (
        <div className={styles.DaysModule}>
            {arrayDaysModuleItem}
        </div>
    );
}

export default DaysModule;