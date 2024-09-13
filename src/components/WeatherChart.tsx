import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Legend,
	Tooltip,
	ChartData,
	ChartOptions,
} from 'chart.js';
import './WeatherChart.css';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Legend,
	Tooltip
);

interface WeatherChartProps {
	labels: string[];
	temperatures: number[];
	windSpeeds: number[];
	humidities: number[];
}

const WeatherChart: React.FC<WeatherChartProps> = ({
	labels,
	temperatures,
	windSpeeds,
	humidities,
}) => {
	const data: ChartData<'bar'> = {
		labels,
		datasets: [
			{
				label: 'Temperature (°C)',
				data: temperatures,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgb(255, 99, 132)',
				borderWidth: 1,
				barPercentage: 0.6, 
				categoryPercentage: 1, 
			},
			{
				label: 'Wind Speed (km/h)',
				data: windSpeeds,
				backgroundColor: 'rgba(54, 162, 235, 0.5)',
				borderColor: 'rgb(54, 162, 235)',
				borderWidth: 1,
			},
			{
				label: 'Humidity (%)',
				data: humidities,
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgb(75, 192, 192)',
				borderWidth: 1,
			},
		],
	};

	const options: ChartOptions<'bar'> = {
		maintainAspectRatio: false,
		scales: {
			x: {
				title: {
					display: true,
					text: 'Time',
				},
				stacked: false,
			},
			y: {
				title: {
					display: true,
					text: 'Value',
				},
				beginAtZero: true,
				stacked: false,
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
