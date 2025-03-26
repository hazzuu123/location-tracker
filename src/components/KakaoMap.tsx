import { useEffect, useRef } from "react";

interface KakaoMapProps {
  latitude: number;
  longitude: number;
}

const KakaoMap = ({ latitude, longitude }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    const onLoadKakaoMap = () => {
      console.log("Script loaded, kakao object:", window.kakao);
      window.kakao.maps.load(() => {
        console.log("kakao.maps.load");
        if (mapRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          console.log(latitude, longitude);
          new window.kakao.maps.Map(mapRef.current, options);
        }
      });
    };

    script.addEventListener("load", onLoadKakaoMap);

    return () => {
      document.head.removeChild(script);
    };
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default KakaoMap;
