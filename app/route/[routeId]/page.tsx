import type { Metadata } from 'next';
import { BusScheduleDetail } from '../../../src/app/components/BusScheduleDetail';
import { busRoutes } from '../../../src/app/data/busRoutes';

type Props = { params: Promise<{ routeId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { routeId } = await params;
  const route = busRoutes.find(r => r.id === routeId);

  if (!route) {
    return { title: '노선을 찾을 수 없습니다' };
  }

  const title = `${route.routeName} 셔틀버스 시간표 | ${route.origin.name} → SK하이닉스`;
  const description = `${route.origin.name} 출발 SK하이닉스 원삼캠퍼스 셔틀버스 시간표. 출근 ${route.commuteSchedule.length}회, 퇴근 ${route.returnSchedule.length}회 운행.`;

  return {
    title,
    description,
    keywords: [
      `${route.routeName} 셔틀버스`,
      `${route.routeName} SK하이닉스 버스`,
      `${route.origin.name} 하이닉스 셔틀`,
      `${route.routeName} 원삼 셔틀버스`,
      `${route.routeName} 버스 시간표`,
    ],
    openGraph: {
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  return busRoutes.map(route => ({ routeId: route.id }));
}

export default function Page() {
  return <BusScheduleDetail />;
}
