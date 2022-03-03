import React from 'react';
import styles from './DaysModule.module.css'
import DaysModuleItem from "./DaysModuleItem/DaysModuleItem";

const DaysModule: React.FC = () => {

    return (
        <div>
            Block Days
            <DaysModuleItem />
        </div>
    );
}

export default DaysModule;