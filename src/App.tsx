import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherDetailsAction } from './services/weather/action';

const App: React.FC = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: any) => state?.weather?.all?.data);

	useEffect(() => {
		getWeatherDetailsAction('kigali')(dispatch);
	}, []);
	return (
		<>
			<SearchBar />
			<WeatherDisplay />
		</>
	);
};

export default App;
