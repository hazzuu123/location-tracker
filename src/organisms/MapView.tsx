import KakaoMap from "../components/KakaoMap";

interface Props {
  latitude: number;
  longitude: number;
}
const MapView = ({ latitude, longitude }: Props) => {
  return (
    <div className="map-container">
      {/* 좌표 표시 영역 */}
      <div className="map-info">
        <h1>지도 뷰</h1>
        <div>위도: {latitude}</div>
        <div>경도: {longitude}</div>
      </div>

      {/* 지도 표시 영역*/}
      <KakaoMap latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default MapView;
