import { weatherActions } from '.';
import { getWeatherDetailsService } from './service';

export const getWeatherDetailsAction =
	(city: string) => async (dispatch: any) => {
		dispatch(weatherActions.setIsLoading(true));

		try {
			const res = await getWeatherDetailsService(city);

			
			if (res.currentWeather.cod === 200) {
				dispatch(weatherActions.setIsLoading(false));

			

				console.log(res.currentWeather);
				console.log(res.forecast);
				dispatch(
					weatherActions.setAll({
						currentWeather: res.currentWeather,
						forecast: res.forecast,
					})
				);

				
				console.log('Current Weather:', res.currentWeather);
				console.log('Forecast:', res.forecast);
			}
		} catch (error) {
			console.log('Error fetching weather details:', error);
			dispatch(weatherActions.setIsLoading(false));
		}
	};
