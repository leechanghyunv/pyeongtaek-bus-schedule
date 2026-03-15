export type BusType = 'express' | 'regular';
export type ScheduleType = 'commute' | 'return';

export interface BusStop {
  id: string;
  name: string;
  address: string;
  lat?: number;
  lng?: number;
}

export interface TimeSchedule {
  time: string;
  note?: string;
}

export interface BusRouteSummary {
  id: string;
  routeNumber: string;
  routeName: string;
  contractor: string;
  type: BusType;
}

export interface BusRoute extends BusRouteSummary {
  origin: BusStop;
  destination: BusStop;
  stops: BusStop[];
  commuteSchedule: TimeSchedule[];
  returnSchedule: TimeSchedule[];
  weekendCommuteSchedule?: TimeSchedule[];
  weekendReturnSchedule?: TimeSchedule[];
}
