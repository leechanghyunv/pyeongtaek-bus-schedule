import type { Metadata } from 'next';
import './globals.css';
import { BusScheduleLayout } from '../src/app/components/BusScheduleLayout';
import { Toaster } from '../src/app/components/ui/sonner';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '평택 버스 시간표',
    template: '%s | 평택 버스 시간표',
  },
  description: '평택 버스 노선별 시간표를 한눈에 확인하세요.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <BusScheduleLayout>{children}</BusScheduleLayout>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
