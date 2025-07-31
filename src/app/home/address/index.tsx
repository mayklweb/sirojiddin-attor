import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    ymaps: any;
  }
}

function Address() {

  const mapRef = useRef<null>(null);
  const placemarkRef = useRef<null>(null);

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

  return (
    <section>
      <div className='my-10'>
        <div className="w-full h-[400px] relative">
          <div
            id="map"
            className="w-full h-full mt-5 absolute"
          ></div>
          <div className="w-full h-full mt-5 pointer-events-none shadow-[inset_0px_0px_20px_40px_#fdfdfd]  absolute"></div>
        </div>
      </div>
    </section>
  )
}

export default Address