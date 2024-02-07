// data_myTripList.js
import { getStringDate } from "../utill/dateString"

export const dummyMyTripPlan = [
    {
        id: 0,
        city: '부산',
        firstDate: new Date(2024, 3, 1).getTime(),
        lastDate: new Date(2024, 3, 2).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 3, 1)),
                place: '부산역',
                memo: ['부산도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 3, 1)),
                place: '해운대',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 3, 2)),
                place: '서면',
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 3, 2)),
                place: '광안리',
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 3, 2)),
                place: '부산역',
                memo: ['집으로']
            },
        ]
    },
    {
        id: 1,
        city: '강릉',
        firstDate: new Date(2024, 3, 6).getTime(),
        lastDate: new Date(2024, 3, 7).getTime(),
        keyword: [],
        people: 3,
        expense: 450000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 3, 6)),
                place: '강릉역',
                memo: ['강릉도착', '점심 어디어디맛집']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 3, 6)),
                place: '강릉관광지1',
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 3, 7)),
                place: '강릉관광지2',
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 3, 7)),
                place: '강릉관광지3',
                memo: ['메모1', '메모2']
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 3, 7)),
                place: '강릉역',
                memo: ['집으로']
            },
        ]
    },
    {
        id: 2,
        city: '제주',
        firstDate: new Date(2024, 3, 12).getTime(),
        lastDate: new Date(2024, 3, 15).getTime(),
        keyword: [],
        people: 4,
        expense: 500000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 3, 12)),
                place: '제주공항',
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 3, 12)),
                place: '제주관광지1',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 3, 13)),
                place: '제주관광지2',
                memo: ['메모1', '메모2']
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 3, 13)),
                place: '제주관광지3',
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 3, 13)),
                place: '제주관광지4',
                memo: ['메모1']
            },
            {
                id: 5,
                date: getStringDate(new Date(2024, 3, 14)),
                place: '제주관광지5',
            },
            {
                id: 6,
                date: getStringDate(new Date(2024, 3, 14)),
                place: '제주관광지6',
            },
            {
                id: 7,
                date: getStringDate(new Date(2024, 3, 15)),
                place: '제주관광지7',
                memo: ['메모1', '메모2']
            },
            {
                id: 8,
                date: getStringDate(new Date(2024, 3, 15)),
                place: '제주공항',
            },
        ]
    },
    {
        id: 3,
        city: '경주',
        firstDate: new Date(2024, 3, 17).getTime(),
        lastDate: new Date(2024, 3, 18).getTime(),
        keyword: [],
        people: 2,
        expense: 650000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 3, 17)),
                place: '경주터미널',
                memo: ['경주도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 3, 17)),
                place: '불국사',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 3, 18)),
                place: '석굴암',
                memo: ['메모1', '메모2']
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 3, 18)),
                place: '안압지',
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 3, 18)),
                place: '경주터미널',
            },
        ]

    },
    {
        id: 4,
        city: '인천',
        firstDate: new Date(2024, 4, 11).getTime(),
        lastDate: new Date(2024, 4, 13).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 4, 11)),
                place: '인천역',
                memo: ['인천도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 4, 11)),
                place: '인천관광지1',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 4, 11)),
                place: '인천역',
                memo: ['집으로']
            }
        ]
    },
    {
        id: 5,
        city: '울산',
        firstDate: new Date(2024, 0, 11).getTime(),
        lastDate: new Date(2024, 0, 13).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [

            {
                id: 0,
                date: getStringDate(new Date(2024, 0, 11)),
                place: '울산역',
                memo: ['집으로']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 0, 11)),
                place: '울산관광지1',
                memo: ['숙소도착']
            },

            {
                id: 2,
                date: getStringDate(new Date(2024, 0, 12)),
                place: '울산관광지2',
                memo: []
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 0, 12)),
                place: '울산관광지3',
                memo: ['숙소도착']
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 0, 13)),
                place: '울산역',
                memo: ['집으로']
            },

        ],
        photo: ['myLastTrip_ulsan.jpg']
    },
    {
        id: 6,
        city: '강릉',
        firstDate: new Date(2023, 11, 24).getTime(),
        lastDate: new Date(2023, 11, 25).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2023, 11, 24)),
                place: '강릉역',
                memo: ['강릉도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 24)),
                place: '강릉관광지1',
                memo: ['숙소도착']
            },
            {
                id: 0,
                date: getStringDate(new Date(2024, 11, 25)),
                place: '강릉관광지2',
                memo: []
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 11, 25)),
                place: '강릉관광지3',
                memo: []
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 11, 25)),
                place: '강릉역',
                memo: ['집으로']
            }

        ], // 여행일정의 장소리스트
        photo: ['myLastTrip_gangneung.jpg']
    }, // 한 여행일정 전체 객체 끝
    {
        id: 7,
        city: '포항',
        firstDate: new Date(2024, 0, 1).getTime(),
        lastDate: new Date(2024, 0, 3).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 0, 1)),
                place: '포항역',
                memo: ['포항도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 0, 1)),
                place: '포항관광지1',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 0, 2)),
                place: '포항관광지2',
                memo: []
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 0, 2)),
                place: '포항관광지3',
                memo: []
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 0, 3)),
                place: '포항역',
                memo: ['집으로']
            }
        ],
        photo: ['myLastTrip_pohang.jpg']
    },
    {
        id: 8,
        city: '서울',
        firstDate: new Date(2024, 0, 5).getTime(),
        lastDate: new Date(2024, 0, 7).getTime(),
        keyword: [],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2024, 0, 5)),
                place: '서울역',
                memo: ['서울도착', '점심 편의점']
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 0, 5)),
                place: '서울관광지1',
                memo: ['숙소도착']
            },
            {
                id: 2,
                date: getStringDate(new Date(2024, 0, 6)),
                place: '서울관광지2',
                memo: []
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 0, 7)),
                place: '서울관광지3',
                memo: []
            },
            {
                id: 4,
                date: getStringDate(new Date(2024, 0, 7)),
                place: '서울역',
                memo: ['집으로']
            },
        ],
        photo: ['myLastTrip_seoul.jpg']
    }
];  // 전체끝

