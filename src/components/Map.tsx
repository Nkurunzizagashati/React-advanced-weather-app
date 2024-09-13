import React, { useEffect } from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaLocationArrow } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';

interface MapComponentProps {
	coords: {
		lat: number;
		lon: number;
	};
	locationName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
	coords,
	locationName,
}) => {
	const MapUpdate = ({
		coords,
	}: {
		coords: { lat: number; lon: number };
	}) => {
		const map = useMap();
		useEffect(() => {
			if (coords) {
				map.setView([coords.lat, coords.lon], 13);
			}
		}, [coords, map]);
		return null;
	};

	// Create the React icon as an HTML string using ReactDOMServer
	const iconHtml = ReactDOMServer.renderToStaticMarkup(
		<FaLocationArrow />
	);

	// Create a custom marker icon using L.divIcon
	const customIcon = L.divIcon({
		className: 'custom-div-icon',
		html: `<div style="font-size: 24px; color: red;">${iconHtml}</div>`,
		iconSize: [30, 42],
		iconAnchor: [15, 42],
		popupAnchor: [0, -42],
	});

	// Safeguard against undefined coordinates
	if (!coords) {
		return <div>Loading map...</div>;
	}

	const position: [number, number] = [coords.lat, coords.lon];

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
				<Marker position={position} icon={customIcon}>
					<Popup>Location: {locationName}</Popup>
				</Marker>
				<MapUpdate coords={coords} />
			</MapContainer>
		</div>
	);
};

export default MapComponent;
