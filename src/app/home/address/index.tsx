import React, { useEffect, useRef } from 'react'

// Extend the Window interface to include ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}

function Address() {

  const mapRef = useRef<null | any>(null);
  const placemarkRef = useRef<null | any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY_HERE&lang=ru_RU";
    script.onload = () => {
      window.ymaps.ready(() => {
        const initialCoords = [41.513266, 60.607986];
        const map = new window.ymaps.Map("map", {
          center: initialCoords,
          zoom: 16,
          controls: [],
        });

        const placemark = new window.ymaps.Placemark(initialCoords, {
          hintContent: "Bino",
          balloonContent: "Bu bino joylashuvi",
        });

        map.geoObjects.add(placemark);

        mapRef.current = map;
        placemarkRef.current = placemark;
      });
    };
    document.body.appendChild(script);
  }, []);


  interface Coordinates {
    lat: number;
    lng: number;
  }

  const changeLocation = (coords: [number, number]) => {
    if (mapRef.current && placemarkRef.current) {
      mapRef.current.setCenter(coords, 16);
      placemarkRef.current.geometry.setCoordinates(coords);
    }
  };

  return (
    <div>
      <div
        id="map"
        className="w-full h-[340px] mt-5 absolute"
      ></div>
    </div>
  )
}

export default Address