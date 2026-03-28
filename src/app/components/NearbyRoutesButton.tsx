'use client';

import { useState } from 'react';
import { LocateFixed, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllRoutes } from '../data/busRoutesManager';
import type { BusRoute } from '../types/bus';

export interface NearbyResult {
  route: BusRoute;
  distance: number; // meters
  stopName: string; // nearest stop name
}

interface NearbyRoutesButtonProps {
  onResult: (results: NearbyResult[]) => void;
  onClear: () => void;
  isActive: boolean;
  nearestDistance?: number;
}

function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getNearest(route: BusRoute, lat: number, lng: number): { distance: number; stopName: string } {
  const candidates = [route.origin, route.destination, ...route.stops].filter(
    (s) => s.lat != null && s.lng != null
  );
  let min = Infinity;
  let stopName = route.origin.name;
  for (const stop of candidates) {
    const d = haversine(lat, lng, stop.lat!, stop.lng!);
    if (d < min) {
      min = d;
      stopName = stop.name;
    }
  }
  return { distance: min, stopName };
}

export function formatDistance(m: number): string {
  if (m < 1000) return `${Math.round(m)}m`;
  return `${(m / 1000).toFixed(1)}km`;
}

export function NearbyRoutesButton({ onResult, onClear, isActive, nearestDistance }: NearbyRoutesButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleClick = () => {
    if (isActive) {
      onClear();
      setStatus('idle');
      return;
    }

    if (!navigator.geolocation) {
      setErrorMsg('위치 기능 미지원 브라우저');
      setStatus('error');
      return;
    }

    setStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const routes = getAllRoutes();
        const results: NearbyResult[] = routes
          .map((route) => ({ route, ...getNearest(route, latitude, longitude) }))
          .sort((a, b) => a.distance - b.distance);
        setStatus('idle');
        onResult(results);
      },
      (err) => {
        setStatus('error');
        setErrorMsg(err.code === 1 ? '위치 권한이 거부되었습니다' : '위치를 가져올 수 없습니다');
      },
      { timeout: 10000 }
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={handleClick}
          className={`py-2.5 px-3.5 shadow-lg rounded-2xl flex flex-col items-start gap-1 cursor-pointer select-none transition-colors ${
            isActive
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : status === 'error'
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          <div className="flex items-center gap-1.5">
            {status === 'loading' ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : isActive ? (
              <X className="w-3 h-3" />
            ) : (
              <LocateFixed className="w-3 h-3" />
            )}
            <span className="text-[10px] opacity-90">
              {status === 'loading'
                ? '위치 확인 중...'
                : status === 'error'
                ? errorMsg
                : isActive
                ? '내 위치 해제'
                : '내 위치 기준'}
            </span>
          </div>
          {isActive && nearestDistance != null && (
            <div className="font-mono font-bold text-lg leading-none">
              {formatDistance(nearestDistance)}
            </div>
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
