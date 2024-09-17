import React from 'react';
// import styles from './WeatherDisplay.module.css';
import {
	FaCloudSun,
	FaLocationArrow,
	FaSoundcloud,
} from 'react-icons/fa';
import WeatherChart from './WeatherChart';
import './WeatherDisplay.css';
import MapComponent from './Map';

const WeatherDisplay: React.FC = () => {
	const tableStyle: React.CSSProperties = {
		borderCollapse: 'collapse',
		border: '1px solid black',
	};

	const cellStyle: React.CSSProperties = {
		border: '1px solid black',
		padding: '8px', // Optional: Add some padding for better readability
		textAlign: 'left', // Optional: Align text to the left
	};
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
					{/* <table style={tableStyle}>
						<thead>
							<tr>
								<th style={cellStyle}>TIME</th>
								<th style={cellStyle}>UV</th>
								<th style={cellStyle}>HUMIDITY</th>
								<th style={cellStyle}>AQ</th>
								<th style={cellStyle}>WIND SPEED</th>
								<th style={cellStyle}>TEMPERATURE</th>
								<th style={cellStyle}>PRESSURE</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={cellStyle}>11:25 AM</td>
								<td style={cellStyle}>4</td>
								<td style={cellStyle}>58%</td>
								<td style={cellStyle}>22</td>
								<td style={cellStyle}>12 km/h</td>
								<td style={cellStyle}>25°C</td>
								<td style={cellStyle}>1013 hPa</td>
							</tr>
						</tbody>
					</table> */}

					<div className="dataContainer">
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
						<div className="data">
							<p>WINDSPEED</p>
							<p>12 km/h</p>
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
				<MapComponent />
				<div>
					<h2>Data for the last 7 days</h2>
					<WeatherChart />
				</div>
			</div>
		</div>
	);
};

export default WeatherDisplay;
