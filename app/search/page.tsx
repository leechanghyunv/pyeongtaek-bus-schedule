import { BusSearch } from '../../src/app/components/BusSearch';

export const metadata = {
  title: '노선 검색 | 평택 기술인 버스 시간표',
  description: '평택 기술인 버스 노선을 검색하세요.',
};

export default function SearchPage() {
  return <BusSearch />;
}
