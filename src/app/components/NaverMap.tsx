'use client';

import { Map } from 'lucide-react';

interface NaverMapProps {
  lat: number;
  lng: number;
  name: string;
  address?: string;
}

export function NaverMap({ lat, lng, name, address }: NaverMapProps) {
  const query = address || name;
  const url = `https://map.naver.com/v5/search/${encodeURIComponent(query)}?c=${lng},${lat},15,0,0,0,dh`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mt-1"
    >
      <Map className="w-3 h-3" />
    </a>
  );
}
