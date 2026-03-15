import type { Metadata } from 'next';
import { BusScheduleDetail } from '../../../src/app/components/BusScheduleDetail';
import { getAllRoutes, getRouteById } from '../../../src/app/data/busRoutesManager';

type Props = { params: Promise<{ routeId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { routeId } = await params;
  const route = getRouteById(routeId);

  if (!route) {
    return { title: '노선을 찾을 수 없습니다' };
  }

  return {
    title: `${route.routeName} 버스 시간표`,
    description: `${route.origin.name} 출발 버스 시간표. 출근 ${route.commuteSchedule.length}회, 퇴근 ${route.returnSchedule.length}회 운행.`,
  };
}

export function generateStaticParams() {
  return getAllRoutes().map(route => ({ routeId: route.id }));
}

export default function Page() {
  return <BusScheduleDetail />;
}
