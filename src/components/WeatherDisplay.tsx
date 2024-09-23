import React from 'react';
import { FaCloudSun, FaLocationArrow, FaSoundcloud } from 'react-icons/fa';
import WeatherChart from './WeatherChart';
import './WeatherDisplay.css';
import MapComponent from './Map';
import { useSelector } from 'react-redux';
import WeatherChartsContainer from './WeatherChartsContainer';

const WeatherDisplay = () => {
  const { weather } = useSelector((state: any) => state);

  const data = weather?.all?.currentWeather;
  const forecast = weather?.all?.forecast;

  const tableStyle: React.CSSProperties = {
    borderCollapse: 'collapse',
    border: '1px solid black',
  };

  const cellStyle: React.CSSProperties = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  };

  const timeToLocaleString = (time: number): string => {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const toReadableTimeZone = (timezoneOffset: number): string => {
    const hoursOffset = timezoneOffset / 3600;
    return `UTC + ${hoursOffset}`;
  };

  return (
    <>
      <div className="mainContainer">
        {weather.isLoading ? (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="mainPageContainer">
            <div className="climateStatistics">
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
                alt="Weather Icon"
                className="cloudSun"
              />
              <div className="cityNameContainer">
                <h2 className="cityName">{data?.name}</h2>
                <FaLocationArrow />
                <h2 className="temperature">{`${data?.main?.temp} °C`}</h2>
              </div>
            </div>
            <div className="climateInfoContainer">
              <div className="dataContainer">
                <div className="data">
                  <p>TIMEZONE</p>
                  <p>{`${toReadableTimeZone(data?.timezone)}`}</p>
                </div>
                <div className="data">
                  <p>HUMIDITY</p>
                  <p>{`${data?.main?.humidity}`}</p>
                </div>
                <div className="data">
                  <p>WINDSPEED</p>
                  <p>{`${data?.wind?.speed} km/h`}</p>
                </div>
              </div>

              <div className="sunriseSunsetInfoMainContainer">
                <h2>SUNRISE & SUNSET</h2>
                <div className="sunriseSunsetInfoContainer">
                  <div className="sunriseSunsetInfo">
                    <div>
                      <p>sunrise</p>
                      <p>{`${timeToLocaleString(data?.sys?.sunrise)} AM`}</p>
                    </div>
                    <div>
                      <p>sunset</p>
                      <p>{`${timeToLocaleString(data?.sys?.sunset)} PM`}</p>
                    </div>
                  </div>
                  <FaSoundcloud className="cloud" />
                  <div className="dayLight">
                    <div>
                      <p>Length of the day:</p>
                      <p>12H:45M</p>
                    </div>
                    <div>
                      <p>Remaining daylight:</p>
                      <p>10H:15M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="visualPresentationContainer">
          <MapComponent coords={data?.coord} locationName={data?.name} />
        </div>
      </div>
      <div className="WeatherChartsDisplayContainer">
        <h2>PREDICTIONS FOR COMING DAYS</h2>
        {weather.isLoading ? (
          <div
            role="status"
            className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
            <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-baseline mt-4">
              <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
              <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
              <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
              <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <WeatherChartsContainer />
        )}
      </div>
    </>
  );
};

export default WeatherDisplay;
