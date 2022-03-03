import React, {useState} from 'react';
import styles from './SearchForm.module.css'
import deleteImage from '../../assets/images/delete.svg'

const SearchForm: React.FC = () => {
    let [valueInput, setValueInput] = useState('');

    const deleteWord = () => {
        valueInput = '';
        setValueInput(valueInput);
    }

    return (
        <div className={styles.searchForm}>
            <input value={valueInput}
                   onChange={event => setValueInput(event.target.value)}
                   className={styles.searchForm__field}
                   placeholder='City'
                   type="text"/>
            <img onClick={deleteWord}
                 src={deleteImage}
                 alt="delete"
                 className={styles.searchForm__image} />
        </div>
    );
}

export default SearchForm;