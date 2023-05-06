// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents, Polyline } from 'react-leaflet';
// import L from 'leaflet';

// import marker_icon from '../../assets/marker.svg';

// const customIcon = L.icon({
//   iconUrl: marker_icon,
//   iconSize: [32, 32],
// });

// const LocationPicker2 = () => {
//   const [positions, setPositions] = useState([]);
//   const [badRoads, setBadRoads] = useState([]);

//   const handleMapClick = (e) => {
//     const { lat, lng } = e.latlng;
//     const newPosition = [lat, lng];
//     setPositions((prevPositions) => [...prevPositions, newPosition]);
//     setBadRoads((prevBadRoads) => [...prevBadRoads, newPosition]);
//     console.log(badRoads);
//   };

//   const LocationMarkers = () => {
//     useMapEvents({
//       click: handleMapClick,
//     });

//     return positions.map((position, index) => (
//       <Marker key={index} position={position} icon={customIcon} />
//     ));
//   };

//   return (
//     <MapContainer center={[42.8746, 74.5698]} zoom={13} style={{ width: '300px', height: '300px' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <LocationMarkers />
//       <Polyline pathOptions={{ color: 'red' }} positions={badRoads} />
//     </MapContainer>
//   );
// };

// export default LocationPicker2;
