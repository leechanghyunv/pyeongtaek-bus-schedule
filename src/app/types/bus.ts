export type BusType = 'express' | 'regular';
export type ScheduleType = 'commute' | 'return';

export interface BusStop {
  id: string;
  name: string;
  address: string;
}

export interface TimeSchedule {
  time: string;
  note?: string;
}

export interface BusRoute {
  id: string;
  routeNumber: string;
  routeName: string;
  type: BusType;
  origin: BusStop;
  destination: BusStop;
  stops: BusStop[];
  commuteSchedule: TimeSchedule[];
  returnSchedule: TimeSchedule[];
}
