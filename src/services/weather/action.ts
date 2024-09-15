import { weatherActions } from '.';
import { getWeatherDetailsService } from './service';

export const getWeatherDetailsAction =
  (city: string) => async (dispatch: any) => {
    dispatch(weatherActions.setIsLoading(true));
    try {
      const res = await getWeatherDetailsService(city);
      if (res.status === 200) {
        dispatch(weatherActions.setIsLoading(false));
        dispatch(weatherActions.setAll(res.data));
        console.log('data', res.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
