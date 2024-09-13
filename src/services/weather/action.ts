import { weatherActions } from '.';
import { getWeatherDetailsService } from './service';

export const getWeatherDetailsAction =
	(city: string) => async (dispatch: any) => {
		dispatch(weatherActions.setIsLoading(true));

		try {
			const res = await getWeatherDetailsService(city);

			// Check for successful response using currentWeather.cod
			if (res.currentWeather.cod === 200) {
				dispatch(weatherActions.setIsLoading(false));

				// Dispatch the current weather and forecast data

				console.log(res.currentWeather);
				console.log(res.forecast);
				dispatch(
					weatherActions.setAll({
						currentWeather: res.currentWeather,
						forecast: res.forecast,
					})
				);

				// Log the weather and forecast data
				console.log('Current Weather:', res.currentWeather);
				console.log('Forecast:', res.forecast);
			}
		} catch (error) {
			console.log('Error fetching weather details:', error);
			dispatch(weatherActions.setIsLoading(false));
		}
	};
