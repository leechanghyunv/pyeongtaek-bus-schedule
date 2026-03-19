'use client';

import { BusRoute } from '../types/bus';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

interface BusRouteCardProps {
  route: BusRoute;
  isActive?: boolean;
  onClick?: () => void;
}

const contractorColors: Record<string, string> = {
  '삼성물산': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  '삼성E&A': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  '삼성중공업': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
};

export function BusRouteCard({ route, isActive, onClick }: BusRouteCardProps) {
  const handleClick = () => {
    localStorage.setItem('recentRoute', JSON.stringify({ routeId: route.id, routeName: route.routeName }));
    onClick?.();
  };

  const [company] = route.contractor.split('/');
  const badgeClass = contractorColors[company] ?? 'bg-muted text-muted-foreground';

  return (
    <Link
      href={`/route/${route.id}`}
      onClick={handleClick}
      className={`block p-3 border rounded-lg hover:bg-accent/50 transition-colors ${
        isActive ? 'bg-accent border-primary' : 'bg-card'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="text-xl font-bold text-primary">{route.routeName}</div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className={`mt-1 text-[8px] font-medium px-1.5 py-0.5 rounded ${badgeClass}`}>{company}</span>
        </div>
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
