import axios from 'axios';

const API_KEY = 'b6ff5397e72ef73e0788315e37c384ba';

export const getWeatherDetailsService = async (city: string) => {
	try {
		
		const currentWeatherResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
		);

		const forecastResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
		);

	
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
