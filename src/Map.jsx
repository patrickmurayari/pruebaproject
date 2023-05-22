
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Coordenadas de ejemplo
      zoom={13} // Nivel de zoom de ejemplo
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
    </MapContainer>
  );
};

export default Map;