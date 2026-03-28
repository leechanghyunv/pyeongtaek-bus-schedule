'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowLeft } from 'lucide-react';
import { getAllRoutes } from '../data/busRoutesManager';
import { BusRouteCard } from './BusRouteCard';
import { NearbyRoutesButton, NearbyResult, formatDistance } from './NearbyRoutesButton';
import { Button } from './ui/button';
import { Input } from './ui/input';

const busRoutes = getAllRoutes();

export function BusSearch() {
  const [query, setQuery] = useState('');
  const [nearbyResults, setNearbyResults] = useState<NearbyResult[] | null>(null);
  const router = useRouter();

  const filtered = useMemo(() => {
    // 내 위치 기준 정렬 중이면 텍스트 검색 무시하고 거리순 사용
    if (nearbyResults) return nearbyResults;

    const q = query.trim().toLowerCase();
    if (!q) return busRoutes.map((route) => ({ route, distance: undefined, stopName: undefined }));
    return busRoutes
      .filter(
        (route) =>
          route.routeName.toLowerCase().includes(q) ||
          route.origin.name.toLowerCase().includes(q) ||
          route.destination.name.toLowerCase().includes(q) ||
          route.contractor?.toLowerCase().includes(q)
      )
      .map((route) => ({ route, distance: undefined, stopName: undefined }));
  }, [query, nearbyResults]);

  const handleNearbyResult = (results: NearbyResult[]) => {
    setNearbyResults(results);
    setQuery('');
  };

  const handleNearbyClear = () => {
    setNearbyResults(null);
  };

  const nearestDistance = nearbyResults?.[0]?.distance;

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        {/* 헤더 */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => router.back()} className="w-10 h-10 flex-shrink-0">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="노선명, 출발지, 도착지, 소속 검색..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (nearbyResults) setNearbyResults(null);
              }}
              className="pl-9 pr-9"
              disabled={!!nearbyResults}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 결과 수 */}
        <p className="text-sm text-muted-foreground">
          {nearbyResults
            ? `내 위치 기준 가까운 노선 ${filtered.length}개`
            : query
            ? `"${query}" 검색 결과 ${filtered.length}개`
            : `전체 ${filtered.length}개 노선`}
        </p>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map(({ route, distance, stopName }) => (
            <div key={route.id} className="flex flex-col gap-1">
              <BusRouteCard route={route} />
              {distance != null && stopName && (
                <div className="text-[10px] text-muted-foreground px-1 flex items-center gap-1">
                  <span className="font-mono font-semibold text-teal-600">{formatDistance(distance)}</span>
                  <span className="truncate">· {stopName}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>검색 결과가 없습니다</p>
          </div>
        )}
      </div>

      <NearbyRoutesButton
        onResult={handleNearbyResult}
        onClear={handleNearbyClear}
        isActive={!!nearbyResults}
        nearestDistance={nearestDistance}
      />
    </div>
  );
}
