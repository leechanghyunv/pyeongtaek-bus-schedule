'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MapPin, Navigation, Clock, CircleDot, ArrowLeft, Map } from 'lucide-react';
import { BusRoute, BusStop, TimeSchedule, ScheduleType } from '../types/bus';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { FloatingCurrentTime } from './FloatingCurrentTime';
import { NaverMap } from './NaverMap';

function StopInfo({ address, lat, lng, name }: { address: string; lat?: number; lng?: number; name: string }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="mt-0.5">
      <div className="text-xs text-muted-foreground flex items-start gap-1">
        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
        <span className="flex-1">{address}</span>
        {lat && lng && (
          <button
            onClick={() => setShowMap(prev => !prev)}
            className="flex-shrink-0 mt-0.5 hover:text-foreground transition-colors"
          >
            <Map className={`w-3 h-3 ${showMap ? 'text-teal-500' : ''}`} />
          </button>
        )}
      </div>
      {showMap && lat && lng && (
        <NaverMap lat={lat} lng={lng} name={name} />
      )}
    </div>
  );
}

type Props = {
  route: BusRoute | undefined;
};

export function BusScheduleDetail({ route }: Props) {
  const router = useRouter();
  const [scheduleType, setScheduleType] = useState<ScheduleType>('commute');
  const [isWeekend, setIsWeekend] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  const handleWeekendToggle = (checked: boolean) => {
    setIsWeekend(checked);
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(prev => prev === time ? undefined : time);
  };



  useEffect(() => {
    if (!route) {
      router.replace('/');
    }
  }, [route, router]);

  if (!route) return null;


  return (
    <div className="h-full overflow-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Back Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            목록으로
          </Button>
        </div>

        {/* Route Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-1">{route.routeName}</h1>
              <p className="text-muted-foreground">
                {route.type === 'express' ? '정류장을 거치지 않고 직행합니다' : `${route.stops.length}개의 정류장을 경유합니다`}
              </p>
            </div>
          </div>
        </div>

        {/* Route Map */}
        <Card>
          <CardHeader>
            <CardTitle>노선 정보</CardTitle>
            <CardDescription>출발지부터 도착지까지의 경로</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Origin */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-primary-foreground" />
                </div>
                {(route.stops.length > 0 || route.type === 'regular') && (
                  <div className="w-0.5 h-12 bg-border my-1"></div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <div className="font-semibold">{route.origin.name}</div>
                <StopInfo address={route.origin.address} lat={route.origin.lat} lng={route.origin.lng} name={route.origin.name} />
              </div>
            </div>

            {/* Stops */}
            {route.stops.map((stop: BusStop, index: number) => (
              <div key={stop.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <CircleDot className="w-4 h-4 text-muted-foreground" />
                  </div>
                  {index < route.stops.length - 1 && (
                    <div className="w-0.5 h-12 bg-border my-1"></div>
                  )}
                  {index === route.stops.length - 1 && (
                    <div className="w-0.5 h-12 bg-border my-1"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="font-medium text-sm">{stop.name}</div>
                  <StopInfo address={stop.address} lat={stop.lat} lng={stop.lng} name={stop.name} />
                </div>
              </div>
            ))}

            {/* Destination */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="font-semibold">{route.destination.name}</div>
                <StopInfo address={route.destination.address} lat={route.destination.lat} lng={route.destination.lng} name={route.destination.name} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card>
          <CardHeader>
            {/* <CardTitle>운행 시간표</CardTitle> */}
            <div className="flex items-center justify-between">
              <CardTitle>운행 시간표</CardTitle>
              {(route.weekendCommuteSchedule || route.weekendReturnSchedule) && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${isWeekend ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>주말</span>
                  <Switch
                    checked={isWeekend}
                    onCheckedChange={handleWeekendToggle}
                    className="data-[state=checked]:bg-teal-500"
                  />
                </div>
              )}
            </div>


            <CardDescription>출근/퇴근 시간대별 운행 스케줄</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={scheduleType} onValueChange={(value) => setScheduleType(value as ScheduleType)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="commute">출근 시간표</TabsTrigger>
                <TabsTrigger value="return">퇴근 시간표</TabsTrigger>
              </TabsList>

              <TabsContent value="commute" className="mt-0">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                  {(isWeekend && route.weekendCommuteSchedule ? route.weekendCommuteSchedule : (route.commuteSchedule ?? [])).map((schedule: TimeSchedule, index: number) => (
                    <div
                      key={index}
                      onClick={() => handleSelectTime(schedule.time)}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border cursor-pointer transition-colors ${
                        selectedTime === schedule.time ? 'bg-teal-100 text-teal-600 border-teal-600' : 'bg-accent border-border'
                      }`}
                    >
                      <Clock className="w-3 h-3 mb-1" />
                      <span className="font-mono text-sm font-semibold">{schedule.time}</span>
                      {schedule.note && (
                        <span className="text-xs mt-0.5 opacity-70">{schedule.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="return" className="mt-0">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                  {(isWeekend && route.weekendReturnSchedule ? route.weekendReturnSchedule : (route.returnSchedule ?? [])).map((schedule: TimeSchedule, index: number) => (
                    <div
                      key={index}
                      onClick={() => handleSelectTime(schedule.time)}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border cursor-pointer transition-colors ${
                        selectedTime === schedule.time ? 'bg-teal-300 text-teal-700 border-teal-700' : 'bg-accent border-border'
                      }`}
                    >
                      <Clock className="w-3 h-3 mb-1" />
                      <span className="font-mono text-sm font-semibold">{schedule.time}</span>
                      {schedule.note && (
                        <span className="text-xs mt-0.5 opacity-70">{schedule.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <FloatingCurrentTime selectedTime={selectedTime} onDismiss={() => setSelectedTime(undefined)} />
    </div>
  );
}
