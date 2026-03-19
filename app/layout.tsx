import type { Metadata } from 'next';
import './globals.css';
import { BusScheduleLayout } from '../src/app/components/BusScheduleLayout';
import { Toaster } from '../src/app/components/ui/sonner';

// layout.tsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pyeongtaek-bus-schedule.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '평택 삼성 셔틀버스 시간표 | 삼성 기술인 통근버스 노선',
    template: '%s | 평택 삼성 셔틀버스 시간표',
  },
  description:
    '평택 삼성현장 셔틀버스·통근버스 노선별 시간표. 송탄역·서정리역·용이동·비전동·팽성읍 출발 삼성 기술인 셔틀버스 출근·퇴근 스케줄을 한눈에 확인하세요.',
  keywords: [
    '평택 삼성 통근버스',
    '삼성 평택 기술인 셔틀버스',
    '평택 삼성현장 셔틀버스',
    '평택셔틀버스',
    '삼성평택셔틀노선',
    '송탄역 삼성반도체 셔틀',
    '용이동 삼성 셔틀',
    '평택 삼성 셔틀버스',
    '삼성 기술인 셔틀버스',
    '삼성 통근버스 평택',
    '삼성반도체 평택 버스',
    '삼성전자 평택 통근버스',
    '평택 삼성 버스 노선',
    '평택 삼성현장 셔틀 버스',
    '삼성 평택 셔틀버스',
    '고덕 삼성 셔틀버스',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '평택 삼성 셔틀버스 시간표',
    title: '평택 삼성 셔틀버스 시간표 | 삼성 기술인 통근버스 노선',
    description:
      '평택 삼성현장 셔틀버스·통근버스 노선별 시간표. 송탄역·서정리역·용이동·비전동·팽성읍 출발 삼성 기술인 셔틀버스 출근·퇴근 스케줄을 한눈에 확인하세요.',
  },
  twitter: {
    card: 'summary',
    title: '평택 삼성 셔틀버스 시간표',
    description:
      '평택 삼성현장 셔틀버스·통근버스 노선별 시간표. 송탄역·서정리역·용이동·비전동 출발 삼성 기술인 셔틀버스 스케줄.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'naver-site-verification': 'b71355b7718a122949fb5b62d55800153d577986',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="b71355b7718a122949fb5b62d55800153d577986" />
        <meta name="google-site-verification" content="Ahznfu41fV8NDA7PALVUzCXKd9ppbG_NK8AjnRNCbaE" />
      </head>
      <body suppressHydrationWarning>
        <BusScheduleLayout>{children}</BusScheduleLayout>
        <Toaster position="bottom-center" richColors />
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "3507c24ffa004e5293a10e8777eb2cda"}'></script>
      </body>
    </html>
  );
}
