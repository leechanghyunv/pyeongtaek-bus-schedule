import { BusRoute } from '../types/bus';

export const busRoutes: BusRoute[] = [
  {
    id: '1',
    routeNumber: '01',
    routeName: '용인',
    type: 'regular',
    origin: {
      id: 'origin-1',
      name: '미르스타디움',
      address: '경기도 용인시 처인구 삼가동 54-2'
    },
    destination: {
      id: 'dest-1',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [
      {
        id: 'stop-1-1',
        name: '용인시청 용인대역 버스정류장',
        address: '경기도 용인시 처인구 삼가동 241-38'
      },
     
    ],
    commuteSchedule: [
      { time: '04:30' },
      { time: '04:40' },
      { time: '04:50' },
      { time: '05:00' },
      { time: '05:10' },
      { time: '05:20' },
      { time: '05:30' },
      { time: '05:40' },
      { time: '05:50' },
      { time: '06:00' },
      { time: '06:10' },
      { time: '06:20' },
      { time: '06:30' },
      { time: '17:20', note: '야간 출근' },
      { time: '17:50', note: '야간 출근' },
      { time: '20:00', note: '야간 출근' }
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '21:30' },
      { time: '22:40' },
      { time: '05:20' ,note: '야간 퇴근'},
      { time: '07:20' ,note: '야간 퇴근'}
    ]
  },
  {
    id: '2',
    routeNumber: '02',
    routeName: '안성A',
    type: 'express',
    origin: {
      id: 'origin-2',
      name: '공도읍',
      address: '경기도 안성시 공도읍 서동대로 4036'
    },
    destination: {
      id: 'dest-2',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '03:30' },
      { time: '04:00' },
      { time: '04:05' },
      { time: '04:10' },
      { time: '04:15' },
      { time: '04:20' },
      { time: '04:25' },
      { time: '04:30' },
      { time: '04:35' },
      { time: '04:40' },
      { time: '04:45' },
      { time: '04:50' },
      { time: '04:55' },
      { time: '05:00' },
      { time: '05:05' },
      { time: '05:10' },
      { time: '05:15' },
      { time: '05:20' },
      { time: '05:25' },
      { time: '05:30' },
      { time: '05:35' },
      { time: '05:40' },
      { time: '05:45' },
      { time: '05:50' },
      { time: '05:55' },
      { time: '06:00' },
      { time: '06:05' },
      { time: '06:10' },
      { time: '06:15' },
      { time: '06:20' },
      { time: '06:25' },
      { time: '06:30' },
      { time: '16:40' ,note: '야간 출근'},
      { time: '17:20' ,note: '야간 출근'},
      { time: '19:30' ,note: '야간 출근'},
      { time: '20:00' ,note: '야간 출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:10' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: 'A,C 한정'},
      { time: '05:40' ,note: '야간 퇴근'},
      { time: '06:20' ,note: '야간 퇴근'},
      { time: '07:40' ,note: '야간 퇴근'}
    ]
  },
  {
    id: '3',
    routeNumber: '03',
    routeName: '안성B',
    type: 'express',
    origin: {
      id: 'origin-3',
      name: '롯데마트앞',
      address: '경기도 안성시 공도읍 양기리 306-34'
    },
    destination: {
      id: 'dest-3',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '03:30' },
      { time: '04:00' },
      { time: '04:30' },
      { time: '05:00' },
      { time: '05:15' },
      { time: '05:30' },
      { time: '05:45' },
      { time: '06:00' },
      { time: '06:15' },
      { time: '06:30' },
      { time: '16:40' ,note: '야간 출근'},
      { time: '17:20' ,note: '야간 출근'},
      { time: '19:30' ,note: '야간 출근'},
      { time: '20:00' ,note: '야간 출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:10' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: 'A,C 한정'},
      { time: '05:40' ,note: '야간 퇴근'},
      { time: '06:20' ,note: '야간 퇴근'},
      { time: '07:40' ,note: '야간 퇴근'}
    ]
  },
  {
    id: '4',
    routeNumber: '04',
    routeName: '안성C',
    type: 'express',
    origin: {
      id: 'origin-4',
      name: '중앙대',
      address: '경기 안성시 대덕면 내리 407(중앙대)'
    },
    destination: {
      id: 'dest-4',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '03:30' },
      { time: '04:00' },
      { time: '04:10' },
      { time: '04:20' },
      { time: '04:30' },
      { time: '04:40' },
      { time: '04:50' },
      { time: '05:00' },
      { time: '05:10' },
      { time: '05:20' },
      { time: '05:30' },
      { time: '05:40' },
      { time: '05:50' },
      { time: '06:00' },
      { time: '06:10' },
      { time: '06:20' },
      { time: '06:30' },
      { time: '16:40' ,note: '야간 출근'},
      { time: '17:20' ,note: '야간 출근'},
      { time: '19:30' ,note: '야간 출근'},
      { time: '20:00' ,note: '야간 출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:10' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: 'A,C 한정'},
      { time: '05:40' ,note: '야간 퇴근'},
      { time: '06:20' ,note: '야간 퇴근'},
      { time: '07:40' ,note: '야간 퇴근'}
    ]
  },
  {
    id: '5',
    routeNumber: '05',
    routeName: '안성D',
    type: 'express',
    origin: {
      id: 'origin-5',
      name: '시외버스터미널',
      address: '경기도 안성시 가사동 186'
    },
    destination: {
      id: 'dest-5',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '04:30' },
      { time: '05:00' },
      { time: '05:30' },
      { time: '06:00' },
      { time: '06:30' }
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:30' },
      { time: '22:40' }
    ]
  },
  {
    id: '6',
    routeNumber: '06',
    routeName: '안성E',
    type: 'express',
    origin: {
      id: 'origin-6',
      name: '죽삼면',
      address: '안성시 죽산면 죽산리 820-1'
    },
    destination: {
      id: 'dest-6',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '04:30' },
      { time: '05:00' },
      { time: '05:30' },
      { time: '06:00' },
      { time: '06:30' }
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:30' },
      { time: '22:40' }
    ]
  },
  {
    id: '7',
    routeNumber: '07',
    routeName: '천리',
    type: 'regular',
    origin: {
      id: 'origin-7',
      name: '천리하모니마트 앞',
      address: '용인시 처인구 백옥대로 757'
    },
    destination: {
      id: 'dest-7',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [
      {
        id: 'stop-7-1',
        name: '에이스카운티아파트 앞 정류장',
        address: '용인시 처인구 백옥대로 737'
      },
      {
        id: 'stop-7-2',
        name: '베나스타아파트 앞 정류장',
        address: '용인시 처인구 백옥대로 711'
      },
      {
        id: 'stop-7-3',
        name: '천리 롯데리아 앞',
        address: '용인시 처인구 백옥대로 641'
      },
      {
        id: 'stop-7-4',
        name: '천리 파리바게트 앞',
        address: '용인시 처인구 백옥대로 619'
      },
      {
        id: 'stop-7-5',
        name: '동아아파트 앞',
        address: '용인시 처인구 이동읍 이원로 20'
      }
    ],
    commuteSchedule: [
      { time: '03:30' },
      { time: '03:50' },
      { time: '04:00' },
      { time: '04:05' },
      { time: '04:10' },
      { time: '04:15' },
      { time: '04:20' },
      { time: '04:25' },
      { time: '04:30' },
      { time: '04:35' },
      { time: '04:40' },
      { time: '04:45' },
      { time: '04:50' },
      { time: '04:55' },
      { time: '05:00' },
      { time: '05:05' },
      { time: '05:10' },
      { time: '05:15' },
      { time: '05:20' },
      { time: '05:25' },
      { time: '05:30' },
      { time: '05:35' },
      { time: '05:40' },
      { time: '05:45' },
      { time: '05:50' },
      { time: '05:55' },
      { time: '06:00' },
      { time: '06:05' },
      { time: '06:10' },
      { time: '06:15' },
      { time: '06:20' },
      { time: '06:25' },
      { time: '06:30' },
      { time: '17:20' ,note: '야간출근'},
      { time: '17:50' ,note: '야간출근'},
      { time: '18:10' ,note: '야간출근'},
      { time: '20:00' ,note: '야간출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:10' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: '야간퇴근'},
      { time: '05:40' ,note: '야간퇴근'},
      { time: '06:20' ,note: '야간퇴근'},
      { time: '07:40' ,note: '야간퇴근'}
    ]
  },
  {
    id: '8',
    routeNumber: '08',
    routeName: '백암',
    type: 'regular',
    origin: {
      id: 'origin-8',
      name: '백암 농협주유소 앞',
      address: '경기도 용인시 처인구 백암면 백암로 196'
    },
    destination: {
      id: 'dest-8',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [
      {
        id: 'stop-8-1',
        name: 'CU편의점 백암 터미널 건너편',
        address: '용인시 처인구 백암면 백암리 374-7'
      },
      {
        id: 'stop-8-2',
        name: '백암중고교 버스정류장',
        address: '용인시 처인구 백암면 근창리 11-6'
      },
      {
        id: 'stop-8-3',
        name: '백암성당 버스정류장',
        address: '용인시 처인구 백암면 백원로 453'
      }
    ],
    commuteSchedule: [
      { time: '03:30' },
      { time: '04:00' },
      { time: '04:10' },
      { time: '04:20' },
      { time: '04:30' },
      { time: '04:40' },
      { time: '04:50' },
      { time: '05:00' },
      { time: '05:10' },
      { time: '05:20' },
      { time: '05:30' },
      { time: '05:40' },
      { time: '05:50' },
      { time: '06:00' },
      { time: '06:10' },
      { time: '06:20' },
      { time: '06:30' },
      { time: '07:00' },
      { time: '07:30' },
      { time: '17:20' ,note: '야간출근'},
      { time: '17:50' ,note: '야간출근'},
      { time: '18:10' ,note: '야간출근'},
      { time: '20:00' ,note: '야간출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: '야간퇴근'},
      { time: '05:40' ,note: '야간퇴근'},
      { time: '06:20' ,note: '야간퇴근'},
      { time: '07:40' ,note: '야간퇴근'}
    ]
  },
  {
    id: '9',
    routeNumber: '09',
    routeName: '양지',
    type: 'regular',
    origin: {
      id: 'origin-9',
      name: '이마트 편의점',
      address: '용인시 처인구 양지면 양지로 103'
    },
    destination: {
      id: 'dest-9',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [
      {
        id: 'stop-9-1',
        name: '세븐일레븐앞',
        address: '용인시 처인구 양지면 양지로 136'
      },
      {
        id: 'stop-9-2',
        name: '양지사거리 버스정류장',
        address: '용인시 처인구 양지면 양대로 7'
      },
      {
        id: 'stop-9-3',
        name: 'CU 남곡사거리앞',
        address: '용인시 처인구 양지면 남평로 24'
      },
      {
        id: 'stop-9-4',
        name: '경남아너스빌 이마트편의점',
        address: '용인시 처인구 양지면 남평로 58'
      },
      {
        id: 'stop-9-5',
        name: '양지리도트 사거리 국수집',
        address: '용인시 처인구 양지면 남평로 104'
      }
    ],
    commuteSchedule: [
      { time: '03:30' },
      { time: '03:50' },
      { time: '04:00' },
      { time: '04:05' },
      { time: '04:10' },
      { time: '04:15' },
      { time: '04:20' },
      { time: '04:25' },
      { time: '04:30' },
      { time: '04:35' },
      { time: '04:40' },
      { time: '04:45' },
      { time: '04:50' },
      { time: '04:55' },
      { time: '05:00' },
      { time: '05:05' },
      { time: '05:10' },
      { time: '05:15' },
      { time: '05:20' },
      { time: '05:25' },
      { time: '05:30' },
      { time: '05:35' },
      { time: '05:40' },
      { time: '05:45' },
      { time: '05:50' },
      { time: '05:55' },
      { time: '06:00' },
      { time: '06:05' },
      { time: '06:10' },
      { time: '06:15' },
      { time: '06:20' },
      { time: '06:25' },
      { time: '06:30' },
      { time: '17:20' ,note: '야간출근'},
      { time: '17:50' ,note: '야간출근'},
      { time: '18:10' ,note: '야간출근'},
      { time: '20:00' ,note: '야간출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '13:40' ,note: '토요일'},
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:20' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '22:40' },
      { time: '05:20' ,note: '야간퇴근'},
      { time: '05:40' ,note: '야간퇴근'},
      { time: '06:20' ,note: '야간퇴근'},
      { time: '07:40' ,note: '야간퇴근'}
    ]
  },
  {
    id: '10',
    routeNumber: '10',
    routeName: '양지리조트',
    type: 'express',
    origin: {
      id: 'origin-10',
      name: '양지리조트',
      address: '양지리조트'
    },
    destination: {
      id: 'dest-10',
      name: '하이닉스현장',
      address: '경기도 용인시 처인구 원삼면 독성리 413'
    },
    stops: [],
    commuteSchedule: [
      { time: '04:30' },
      { time: '04:40' },
      { time: '04:50' },
      { time: '05:00' },
      { time: '05:10' },
      { time: '05:20' },
      { time: '05:30' },
      { time: '05:40' },
      { time: '05:50' },
      { time: '06:00' },
      { time: '06:10' },
      { time: '06:20' },
      { time: '17:00' ,note: '야간출근'},
      { time: '17:20' ,note: '야간출근'}
    ],
    returnSchedule: [
      { time: '13:20' },
      { time: '14:40' },
      { time: '17:20' },
      { time: '17:40' },
      { time: '18:20' },
      { time: '18:40' },
      { time: '19:20' },
      { time: '19:40' },
      { time: '20:40' },
      { time: '21:20' },
      { time: '21:40' },
      { time: '05:20' ,note: '야간퇴근'},
      { time: '07:20' ,note: '야간퇴근'}
    ]
  }
];