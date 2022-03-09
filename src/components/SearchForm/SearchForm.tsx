import React, {useState} from 'react';
import styles from './SearchForm.module.css'
import deleteImage from '../../assets/images/delete.svg'

interface props {
    sendCityName: (param: string) => void,
    deleteBlock: () => void,
}

const SearchForm: React.FC<props> = ({sendCityName, deleteBlock}) => {

    let [valueInput, setValueInput] = useState('');
    let placeholder: string = 'Enter the name of the city';

    const deleteWord = () => {
        deleteBlock();
        valueInput = '';
        setValueInput(valueInput);
    }

    const takeCityName = () => {
            sendCityName(valueInput);
    }

    return (
        <div className={styles.searchForm}>
            <input value={valueInput}
                   onChange={event => setValueInput(event.target.value)}
                   onKeyDown={(event) => {
                       if(event.code === 'Enter') {
                           takeCityName();
                       }
                   }}
                   className={styles.searchForm__field}
                   placeholder = {placeholder}
                   type="text"/>
            <img onClick={deleteWord}
                 src={deleteImage}
                 alt="delete"
                 className={styles.searchForm__image} />
        </div>
    );
}

export default SearchForm;