// import axios from 'axios';

// export const getWeatherDetailsService = async (city: string) => {
// 	try {
// 		const res = await axios.get(
// 			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b6ff5397e72ef73e0788315e37c384ba`
// 		);
// 		return res;
// 	} catch (error) {
// 		console.log('error', error);
// 	}
// };

import axios from 'axios';

const API_KEY = 'b6ff5397e72ef73e0788315e37c384ba'; // Store your API key as a constant

export const getWeatherDetailsService = async (city: string) => {
	try {
		// Fetch current weather data
		const currentWeatherResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
		);

		// Fetch weather forecast for the next 5 days (3-hour intervals)
		const forecastResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
		);

		// Return both current weather and forecast
		return {
			currentWeather: currentWeatherResponse.data,
			forecast: forecastResponse.data,
		};
	} catch (error: any) {
		console.error('Error fetching weather data:', error.message);
		throw new Error(
			error.response?.data?.message ||
				'Failed to fetch weather data'
		);
	}
};
