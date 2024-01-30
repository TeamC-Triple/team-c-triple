// data_myTripList.js

export const dummyMyTripPlan = [
    {
        id: 0,
        city: '부산',
        firstDate: new Date(2024, 3, 1).getTime(),
        lastDate: new Date(2024, 3, 2).getTime(),
        keyword:[],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0, 
                planDate: new Date(2024, 3, 1).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '부산역',
                        memo: ['부산도착', '점심 편의점']
                    },
                    {
                        id: 1,
                        place: '해운대',
                        memo: ['숙소도착']
                    },
                ]
            },
            {
                id: 1, 
                planDate: new Date(2024, 3, 2).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '서면',
                    },
                    {
                        id: 1,
                        place: '광안리',
                    },
                    {
                        id: 2,
                        place: '부산역',
                        memo: ['집으로']
                    },
                ]
            }
        ]
    },
    {
        id: 1,
        city: '강릉',
        firstDate: new Date(2024, 3, 6).getTime(),
        lastDate: new Date(2024, 3, 7).getTime(),
        keyword:[],
        people: 3,
        expense: 450000,
        days: [
            {
                id: 0, 
                planDate: new Date(2024, 3, 6).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '강릉역',
                        memo: ['강릉도착', '점심 어디어디맛집']
                    },
                    {
                        id: 1,
                        place: '강릉관광지1',
                    },
                ]
            },
            {
                id: 1, 
                planDate: new Date(2024, 3, 7).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '강릉관광지2',
                    },
                    {
                        id: 1,
                        place: '강릉관광지3',
                        memo: ['메모1', '메모2']
                    },
                    {
                        id: 2,
                        place: '강릉역',
                        memo: ['집으로']
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        city: '제주',
        firstDate: new Date(2024, 3, 12).getTime(),
        lastDate: new Date(2024, 3, 15).getTime(),
        keyword:[],
        people: 4,
        expense: 500000,
        days: [
            {
                id: 0, 
                planDate: new Date(2024, 3, 12).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '제주공항',
                    },
                    {
                        id: 1,
                        place: '제주관광지1',
                        memo: ['숙소도착']
                    },
                ]
            },
            {
                id: 1, 
                planDate: new Date(2024, 3, 13).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '제주관광지2',
                        memo: ['메모1', '메모2']
                    },
                    {
                        id: 1,
                        place: '제주관광지3',
                    },
                    {
                        id: 2,
                        place: '제주관광지4',
                        memo: ['메모1']
                    },
                ]
            },
            {
                id: 2, 
                planDate: new Date(2024, 3, 14).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '제주관광지5',
                    },
                    {
                        id: 1,
                        place: '제주관광지6',
                    }
                ]
            },
            {
                id: 3, 
                planDate: new Date(2024, 3, 15).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '제주관광지7',
                        memo: ['메모1', '메모2']
                    },
                    {
                        id: 1,
                        place: '제주공항',
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        city: '경주',
        firstDate: new Date(2024, 3, 17).getTime(),
        lastDate: new Date(2024, 3, 18).getTime(),
        keyword:[],
        people: 2,
        expense: 650000,
        days: [
            {
                id: 0, 
                planDate: new Date(2024, 3, 17).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '경주터미널',
                        memo: ['경주도착', '점심 편의점']
                    },
                    {
                        id: 1,
                        place: '불국사',
                        memo: ['숙소도착']
                    },
                ]
            },
            {
                id: 1, 
                planDate: new Date(2024, 3, 18).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '석굴암',
                        memo: ['메모1', '메모2']
                    },
                    {
                        id: 1,
                        place: '안압지',
                    },
                    {
                        id: 2,
                        place: '경주터미널',
                    },
                ]
            }
        ]
        
    },
    {
        id: 4,
        city: '인천',
        firstDate: new Date(2024, 4, 11).getTime(),
        lastDate: new Date(2024, 4, 13).getTime(),
        keyword:[],
        people: 2,
        expense: 350000,
        days: [
            {
                id: 0, 
                planDate: new Date(2024, 4, 11).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '인천역',
                        memo: ['인천도착', '점심 편의점']
                    },
                    {
                        id: 1,
                        place: '인천관광지1',
                        memo: ['숙소도착']
                    },
                ]
            },
            {
                id: 1, 
                planDate: new Date(2024, 4, 12).getTime(),
                sch: [
                    {
                        id: 0,
                        place: '인천관광지2',
                    },
                    {
                        id: 1,
                        place: '인천관광지3',
                    },
                    {
                        id: 2,
                        place: '인천역',
                        memo: ['집으로']
                    },
                ]
            }
        ]
    }
]