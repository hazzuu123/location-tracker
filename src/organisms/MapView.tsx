interface Props {
  latitude: number;
  longitude: number;
}
const MapView = ({ latitude, longitude }: Props) => {
  return (
    <div>
      <h1>지도 뷰</h1>
      <div>위도: {latitude}</div>
      <div>경도: {longitude}</div>
    </div>
  );
};

export default MapView;
