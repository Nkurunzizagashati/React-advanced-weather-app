import React from 'react';
// import styles from './WeatherDisplay.module.css';
import {
	FaCloudSun,
	FaLocationArrow,
	FaSoundcloud,
} from 'react-icons/fa';
import WeatherChart from './WeatherChart';
import './WeatherDisplay.css';

const WeatherDisplay: React.FC = () => {
	return (
		<div className="mainContainer">
			<div className="mainPageContainer">
				<div className="climateStatistics">
					<FaCloudSun className="cloudSun" />
					<div className="cityNameContainer">
						<h2 className="cityName">Hyderabad</h2>
						<FaLocationArrow />
						<h2 className="temperature">28°</h2>
					</div>
				</div>
				<div className="climateInfoContainer">
					<div className="dataContainer">
						<div className="data">
							<p>TIME</p>
							<p>11:25 AM</p>
						</div>
						<div className="data">
							<p>UV</p>
							<p>4</p>
						</div>
						<div className="data">
							<p>HUMIDITY</p>
							<p>58%</p>
						</div>
						<div className="data">
							<p>AQ</p>
							<p>22</p>
						</div>
					</div>
					<div className="sunriseSunsetInfoMainContainer">
						<h2>SUNRISE & SUNSET</h2>
						<div className="sunriseSunsetInfoContainer">
							<div className="sunriseSunsetInfo">
								<div>
									<p>sunrise</p>
									<p>06:25 AM</p>
								</div>
								<div>
									<p>sunset</p>
									<p>06:30 PM</p>
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
				<h2>Data for the last 7 days</h2>
				<WeatherChart />
			</div>
		</div>
	);
};

export default WeatherDisplay;
