'use client';

import { useParams } from 'next/navigation';
import { getAllRoutes } from '../data/busRoutesManager';

const busRoutes = getAllRoutes();
import { BusRouteCard } from './BusRouteCard';
import { Bus, Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export function BusScheduleLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const routeId = params?.routeId as string | undefined;
  const [open, setOpen] = useState(false);
  const router = useRouter();


const getStoreLink = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "https://play.google.com/store/apps/details?id=com.app.calendar_project_240727";
  if (/iphone|ipad|ipod/i.test(ua)) return "https://apps.apple.com/kr/app/워크캘린더-공수달력-공수계산기-일용직-노가다-필수/id6596813027";
  return "https://app-link-theta.vercel.app";
};

  const RouteList = () => (
    <div className="space-y-3">
      {busRoutes.map((route) => (
        <BusRouteCard
          key={route.id}
          route={route}
          isActive={route.id === routeId}
          onClick={() => setOpen(false)}
        />
      ))}
    </div>
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="px-4 py-4 flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
           {/* 모바일 햄버거 메뉴 버튼 */}
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="w-10 h-10 border border-border">
                <Menu className="w-12 h-12" />
              </Button>
            </SheetTrigger>
            {/* 모바일 드로어 */}
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="flex items-center gap-2"> 
                  <Bus className="w-6 h-6 text-primary" />
                  <span>버스 노선</span>
                </SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-80px)] p-4">
                <RouteList />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          {/* 버스 아이콘 + 타이틀 */}
          {/* <Bus className="w-8 h-8 text-primary" /> */}


          
          {/* <div className="flex-1">
            <h1 className="text-base font-bold">버스 시간표</h1>
            <p className="text-xs text-muted-foreground">출근/퇴근 시간대별 운행 스케줄</p>
          </div> */}
          
          <div className="flex-1">
            <h1 className="text-sm font-bold">
            공수달력 <span className="text-teal-700 animate-blink3">워크캘린더</span>에서 제공합니다
            </h1>
            
            <a href={getStoreLink()}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-teal-700 underline block"
            >
            워크캘린더 만나보기
            </a>
          </div>


          {/* 검색 버튼 */}
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 "
            onClick={() => router.push('/search')}
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-80 border-r bg-card overflow-auto">
          <ScrollArea className="h-full p-4">
            <div className="mb-4">
              <h2 className="font-semibold text-lg mb-1">전체 노선</h2>
              <p className="text-sm text-muted-foreground">총 {busRoutes.length}개 노선</p>
            </div>
            <RouteList />
          </ScrollArea>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}