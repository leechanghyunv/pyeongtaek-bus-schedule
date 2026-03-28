'use client';

import { useEffect, useRef } from 'react';

interface NaverMapProps {
  lat: number;
  lng: number;
  name: string;
}

declare global {
  interface Window {
    naver: any;
  }
}

export function NaverMap({ lat, lng, name }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapId = `map-${lat}-${lng}`.replace(/\./g, '_');

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;

    const initMap = () => {
      if (!mapRef.current || !window.naver) return;
      const position = new window.naver.maps.LatLng(lat, lng);
      const map = new window.naver.maps.Map(mapRef.current, {
        center: position,
        zoom: 16,
      });
      new window.naver.maps.Marker({
        position,
        map,
        title: name,
      });
    };

    if (window.naver?.maps) {
      initMap();
      return;
    }

    const scriptId = 'naver-map-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      const existing = document.getElementById(scriptId) as HTMLScriptElement;
      existing.addEventListener('load', initMap);
    }
  }, [lat, lng, name]);

  return (
    <div
      ref={mapRef}
      id={mapId}
      className="w-full h-48 rounded-lg mt-2 border border-border"
    />
  );
}
