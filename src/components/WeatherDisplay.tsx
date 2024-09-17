import React from 'react';
import {
	FaCloudSun,
	FaLocationArrow,
	FaSoundcloud,
} from 'react-icons/fa';
import WeatherChart from './WeatherChart';
import './WeatherDisplay.css';
import MapComponent from './Map';
import Clouds from '../assets/Clouds';
import Vector from '../assets/Vector';
import Rain from '../assets/Rain';
import { useSelector } from 'react-redux';
import Warning from '../assets/Warning';


const WeatherDisplay = () => {
  const WeatherDisplay = ()=>{
    const{ weather} = useSelector((state:any)=>state)
	const tableStyle: React.CSSProperties = {
		borderCollapse: 'collapse',
		border: '1px solid black',
	};

	const cellStyle: React.CSSProperties = {
		border: '1px solid black',
		padding: '8px', 
		textAlign: 'left',
	};
	return (
   <>
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
    <div className="px-6 ">
    <div className="items-center flex flex-col justify-center gap-2 text-[#2C2C2C]">
      <Clouds/>
      <div className="flex items-center gap-2">
      <h2 className="text-4xl font-bold">Mumbai</h2>
      <Vector/>
      </div>
      <h1 className="text-4xl font-medium">20</h1>
      </div>
      <div className="bg-[#FDFCFC] px-5 py-3 flex- items-center- rounded-2xl mt-9">
        <div className="flex items-center gap-2 ">
        <Warning/>
        <h4 className="text-[#FFCC4D]">WARNING</h4>
        </div>
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 text-[#C4C4C4]">
      <div>
        <h3 className="">% RAIN</h3>
        <h2>58%</h2>
      </div>
      <div>
      <h3>EXP. TIME</h3>
      <h2>02:00 PM</h2>
      </div>
     </div>
     <Rain/>
        </div>
        <div>
          <h3 className="text-[#FFD600]">Expecting Rainfall</h3>
        </div>
    
      </div>
      <div className="bg-red-500 flex gap-14">
        <div>
          <h3>TIME</h3>
          <h3>11:25 AM</h3>
        </div>
        <div>
          <h3>UV</h3>
          <h3>4</h3>
        </div>
        <div>
          <h3>% RAIN</h3>
          <h3>58%</h3>
        </div>
        <div>
          <h3>AQ</h3>
          <h3>22</h3>
        </div>
        <div>

        </div>
      </div>
    </div>
   </>
    
  
		
   
	);
}
};

export default WeatherDisplay;

