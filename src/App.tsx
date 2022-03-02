import React from 'react';
import styles from './App.module.css';
import SearchForm from "./components/SearchForm";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <SearchForm />
    </div>
  );
}

export default App;
