import React from 'react';
import {
	FaCloudSun,
	FaLocationArrow,
	FaSoundcloud,
} from 'react-icons/fa';
import WeatherChart from './WeatherChart';
import './WeatherDisplay.css';
import MapComponent from './Map';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
	const { weather } = useSelector((state: any) => state);

	const data = weather?.all?.data;
	console.log('weather----', data);
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
								<p>{`${toReadableTimeZone(
									data?.timezone
								)}`}</p>
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
										<p>{`${timeToLocaleString(
											data?.sys?.sunrise
										)} AM`}</p>
									</div>
									<div>
										<p>sunset</p>
										<p>{`${timeToLocaleString(
											data?.sys?.sunset
										)} PM`}</p>
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
				<div className="visualPresentationContainer">
					<MapComponent
						coords={data?.coord}
						locationName={data?.name}
					/>
					<div>
						<h2>Data for the last 7 days</h2>
						<WeatherChart />
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherDisplay;
