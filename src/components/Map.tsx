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
import { useSelector } from 'react-redux';
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

	const { weather } = useSelector((state: any) => state);
	// Safeguard against undefined coordinates
	// if (!coords) {
	// 	return <div>
	// 	<div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
	// 			<div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-300">
	// 					<svg className="w-10 h-10 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
	// 							<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
	// 					</svg>
	// 			</div>
	// 			<span className="sr-only">Loading...</span>
	// 	</div>

	// 	</div>;
	// }

	const position: [number, number] = coords && [
		coords?.lat,
		coords?.lon,
	];

	return (
		<div style={{ width: '100%' }} className="md:h-full h-[300px]">
			{weather?.isLoading ? (
				<div
					role="status"
					className="space-y-8 w-full animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse "
				>
					<div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-300">
						<svg
							className="w-10 h-10 text-gray-200 dark:text-gray-200"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
						</svg>
					</div>
				</div>
			) : (
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
			)}
		</div>
	);
};

export default MapComponent;
