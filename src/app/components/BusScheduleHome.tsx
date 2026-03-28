'use client';

import { Bus, Clock, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { BusRouteCard } from './BusRouteCard';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { getAllRoutes } from '../data/busRoutesManager';

const busRoutes = getAllRoutes();

interface RecentRoute {
  routeId: string;
  routeName: string;
}

export function BusScheduleHome() {
  const [recentRoute, setRecentRoute] = useState<RecentRoute | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('recentRoute');
    if (stored) {
      setRecentRoute(JSON.parse(stored));
      setIsVisible(true);
    }
  }, []);

  const handleNavigate = () => {
    if (recentRoute) router.push(`/route/${recentRoute.routeId}`);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('recentRoute');
    setIsVisible(false);
  };

  return (
    <div className="h-full overflow-auto">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Bus className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">평택 기술인 버스 시간표</h1>
            <p className="text-sm text-muted-foreground">
              노선을 선택하여 상세 시간표를 확인하세요
            </p>
          </div>
        </div>

        <Card className="bg-accent/50 border-dashed">
          <CardContent className="py-4 [&:last-child]:pb-4">
            <div className="flex items-center gap-3 text-sm">
              <img src="/icons/lightbull.svg" alt="안내" className="w-4 h-4 flex-shrink-0" />
              <p className="text-muted-foreground">
                각 노선은 <span className="font-semibold text-foreground">출근</span>과{' '}
                <span className="font-semibold text-foreground">퇴근</span> 시간대별로 운행 스케줄이 제공됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {busRoutes.map((route) => (
            <BusRouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isVisible && recentRoute && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="relative group">
              <Button
                onClick={handleNavigate}
                className="h-auto py-2.5 px-3.5 shadow-lg hover:shadow-xl transition-all rounded-2xl bg-gray-700 text-white hover:bg-gray-600 flex flex-col items-start gap-1 min-w-[120px]"
              >
                <div className="flex items-center gap-1.5 w-full">
                  <span className="text-[10px] opacity-90">노선 다시보기</span>
                </div>
                <div className="font-bold text-lg">{recentRoute.routeName}</div>
              </Button>

              {/* Clear button */}
              <button
                onClick={handleClear}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:scale-110 hover:bg-teal-600"
                aria-label="최근 노선 제거"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
