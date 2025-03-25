import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";
import { useGeolocation } from "../hooks/useGeolocation";
import MapView from "../organisms/MapView";
import MapTemplate from "../templates/MapTemplate";

const Map = () => {
  const { latitude, longitude, error, isLoading } = useGeolocation();
  return (
    <MapTemplate>
      {isLoading && <LoadingScreen message="Loading..." />}
      {error && <ErrorScreen error={error} />}
      {latitude && longitude && <MapView latitude={latitude} longitude={longitude} />}
    </MapTemplate>
  );
};

export default Map;
