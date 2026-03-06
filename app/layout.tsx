import type { Metadata } from 'next';
import './globals.css';
import { BusScheduleLayout } from '../src/app/components/BusScheduleLayout';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '../src/app/components/ui/sonner';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://busschedulecreator.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '용인 SK하이닉스 셔틀버스 시간표 | 원삼 통근버스 노선',
    template: '%s | SK하이닉스 셔틀버스 시간표',
  },
  description:
    '용인·안성·천리·백암·양지 출발 SK하이닉스 원삼캠퍼스 셔틀버스 시간표. 출근·퇴근 노선별 운행 스케줄을 한눈에 확인하세요.',
  keywords: [
    '용인 SK하이닉스 셔틀버스',
    '용인 sk 셔틀',
    '원삼 sk하이닉스 셔틀버스 노선',
    '안성 중앙대 하이닉스 셔틀',
    '원삼 sk 현장 셔틀버스 위치',
    '용인sk셔틀버스노선도',
    '용인 하이닉스 양지 버스 시간표',
    '안성c거점 위치',
    '용인 터미널에서 용인하이닉스',
    '천리 sk현장 셔틀',
    '양지 원삼 셔틀버스',
    'SK하이닉스 통근버스',
    '하이닉스 셔틀버스 시간표',
    '원삼 셔틀버스',
    '용인 하이닉스 버스',
    '안성 하이닉스 버스',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: 'SK하이닉스 셔틀버스 시간표',
    title: '용인 SK하이닉스 셔틀버스 시간표 | 원삼 통근버스 노선',
    description:
      '용인·안성·천리·백암·양지 출발 SK하이닉스 원삼캠퍼스 셔틀버스 시간표. 출근·퇴근 노선별 운행 스케줄을 한눈에 확인하세요.',
  },
  twitter: {
    card: 'summary',
    title: '용인 SK하이닉스 셔틀버스 시간표',
    description:
      '용인·안성·천리·백암·양지 출발 SK하이닉스 원삼캠퍼스 셔틀버스 시간표.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'h7qGAF-t7ErzI67tKLbr3mHeM06IpybUzfQ6RsGOoZY',
    other: {
      'naver-site-verification': '02dcea37f4e66f308596fb4fdf43bd3d33cc2e19',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <BusScheduleLayout>{children}</BusScheduleLayout>
        <Toaster position="bottom-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
