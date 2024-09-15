import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  return(
    <>
    <SearchBar/>
    <WeatherDisplay/>
    </>
  );
};

export default App;