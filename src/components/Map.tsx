import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const MapComponent: React.FC = () => {
	const{ weather} = useSelector((state:any)=>state)
	const data =weather?.all?.data

	const position: [number, number] = [51.505, -0.09]; // Position as a tuple of numbers

	return (
		<div style={{ height: '300px', width: '100%' }}>
			<MapContainer
				style={{ height: '100%', width: '100%' }}
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				className="z-10"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapComponent;
