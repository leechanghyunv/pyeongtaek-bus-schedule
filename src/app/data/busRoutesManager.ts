import { BusRoute, BusRouteSummary } from '../types/bus';
import routesSummary from './routes.json';
import route01 from './route-01.json';
import route02 from './route-02.json';
import route03 from './route-03.json';
import route04 from './route-04.json';
import route05 from './route-05.json';
import route06 from './route-06.json';
import route07 from './route-07.json';
import route08 from './route-08.json';
import route09 from './route-09.json';
import route10 from './route-10.json';
import route11 from './route-11.json';
import route12 from './route-12.json';
import route13 from './route-13.json';
import route14 from './route-14.json';
import route15 from './route-15.json';
import route16 from './route-16.json';
import route17 from './route-17.json';
import route18 from './route-18.json';
import route19 from './route-19.json';
import route20 from './route-20.json';

const routeDetails: Record<string, BusRoute> = {
  'route-01': route01 as BusRoute,
  'route-02': route02 as BusRoute,
  'route-03': route03 as BusRoute,
  'route-04': route04 as BusRoute,
  'route-05': route05 as BusRoute,
  'route-06': route06 as BusRoute,
  'route-07': route07 as BusRoute,
  'route-08': route08 as BusRoute,
  'route-09': route09 as BusRoute,
  'route-10': route10 as BusRoute,
  'route-11': route11 as BusRoute,
  'route-12': route12 as BusRoute,
  'route-13': route13 as BusRoute,
  'route-14': route14 as BusRoute,
  'route-15': route15 as BusRoute,
  'route-16': route16 as BusRoute,
  'route-17': route17 as BusRoute,
  'route-18': route18 as BusRoute,
  'route-19': route19 as BusRoute,
  'route-20': route20 as BusRoute,
};

export function getAllRoutesSummary(): BusRouteSummary[] {
  return routesSummary as BusRouteSummary[];
}

export function getAllRoutes(): BusRoute[] {
  return (routesSummary as BusRouteSummary[]).map((s) => routeDetails[s.id]);
}

export function getRouteById(id: string): BusRoute | undefined {
  return routeDetails[id];
}
