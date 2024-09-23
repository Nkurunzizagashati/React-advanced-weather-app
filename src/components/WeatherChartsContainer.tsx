import React from 'react';
import { useSelector } from 'react-redux';
import WeatherChart from './WeatherChart';
import './WeatherChartsContainer.css';

const WeatherChartsContainer: React.FC = () => {
	const { weather } = useSelector((state: any) => state);
	const forecast = weather?.all?.forecast;
	console.log("forecast",forecast)

	// Group forecast data by day
	const groupedData: Record<
		string,
		{
			time: string;
			temp: number;
			windSpeed: number;
			humidity: number;
		}[]
	> = {};

	if (forecast?.list) {
		forecast.list.forEach((entry: any) => {
			const date = entry.dt_txt.split(' ')[0];
			const time = entry.dt_txt.split(' ')[1];

			if (!groupedData[date]) {
				groupedData[date] = [];
			}

			groupedData[date].push({
				time,
				temp: entry.main.temp,
				windSpeed: entry.wind.speed,
				humidity: entry.main.humidity,
			});
		});
	}

	// Convert the groupedData object to an array and skip the first entry
	const groupedDataArray = Object.entries(groupedData).slice(1);

	return (
		<div className="chartsContainer">
			{groupedDataArray.map(([date, entries]) => {
				const labels = entries.map((entry) => entry.time);
				const temperatures = entries.map((entry) => entry.temp);
				const windSpeeds = entries.map(
					(entry) => entry.windSpeed
				);
				const humidities = entries.map(
					(entry) => entry.humidity
				);

				return (
					<div key={date} className="chartItem">
						<h3>{date}</h3>
						<WeatherChart
							labels={labels}
							temperatures={temperatures}
							windSpeeds={windSpeeds}
							humidities={humidities}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default WeatherChartsContainer;
