import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	ChartOptions,
	ChartData,
} from 'chart.js';

import './WeatherChart.css';

// import styles from './WeatherChart.module.css';

// Register the necessary chart.js components
ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement
);

const WeatherChart: React.FC = () => {
	// Example weather data
	const weatherData = [
		{ date: '2024-09-01', temperature: 22 },
		{ date: '2024-09-02', temperature: 20 },
		{ date: '2024-09-03', temperature: 19 },
		{ date: '2024-09-04', temperature: 21 },
		{ date: '2024-09-05', temperature: 20 },
		{ date: '2024-09-06', temperature: 21 },
		{ date: '2024-09-07', temperature: 22 },
	];

	// Prepare the data and labels for the chart
	const labels = weatherData.map((data) => data.date);
	const temperatures = weatherData.map((data) => data.temperature);

	// Type the chart data
	const data: ChartData<'bar', number[], string> = {
		labels: labels, // Date labels
		datasets: [
			{
				label: 'Temperature (°C)',
				data: temperatures, // Temperature data points

				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
			},
		],
	};

	// Type the chart options
	const options: ChartOptions<'bar'> = {
		scales: {
			x: {
				title: {
					display: true,
					text: 'Date',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Temperature (°C)',
				},
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="chartContainer">
			<Bar data={data} options={options} />
		</div>
	);
};

export default WeatherChart;
