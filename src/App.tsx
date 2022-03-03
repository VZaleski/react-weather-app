import React from 'react';
import styles from './App.module.css';
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherModule from "./components/WeatherModule/WeatherModule";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <SearchForm />
        <WeatherModule />
    </div>
  );
}

export default App;
