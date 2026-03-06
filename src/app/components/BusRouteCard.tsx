'use client';

import { BusRoute } from '../types/bus';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

interface BusRouteCardProps {
  route: BusRoute;
  isActive?: boolean;
  onClick?: () => void;
}

export function BusRouteCard({ route, isActive, onClick }: BusRouteCardProps) {
  const handleClick = () => {
    localStorage.setItem('recentRoute', JSON.stringify({ routeId: route.id, routeName: route.routeName }));
    onClick?.();
  };

  return (
    <Link
      href={`/route/${route.id}`}
      onClick={handleClick}
      className={`block p-3 border rounded-lg hover:bg-accent/50 transition-colors ${
        isActive ? 'bg-accent border-primary' : 'bg-card'
      }`}
    >
      <div className="mb-2">
        <div className="text-xl font-bold text-primary">{route.routeName}</div>
      </div>

      <div className="text-xs space-y-1">
        <div className="flex items-center gap-1.5 text-foreground">
          <Navigation className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span className="font-medium truncate">{route.origin.name}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{route.destination.name}</span>
        </div>
      </div>

      {route.stops.length > 0 && (
        <div className="mt-1.5 text-xs text-muted-foreground">
          경유 {route.stops.length}개
        </div>
      )}
    </Link>
  );
}
