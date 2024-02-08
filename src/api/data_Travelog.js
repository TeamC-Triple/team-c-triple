import { getStringDate } from "../utill/dateString"

export const dummyTravelog = [
    {
        id : 0,
        title: '23년과 함께 마무리한 BUSAN',
        writer : 'jeny',
        profileImg : '/profile0.JPG',
        travelImg : ['/travelPhoto_1.jpg', '/travelPhoto_2.jpg', '/travelPhoto_3.jpg', '/travelPhoto_4.jpg', '/travelPhoto_5.jpg'],
        date : {
            firstDay : new Date('2023-12-29').getTime(),
            lastDay : new Date('2023-12-31').getTime()
        },
        city : '부산',
        ment : '한 해를 마무리하면서 큰 기대와 준비없이 갔지만 오히려 기억에 남는 여행이었다.',
        commentInfo: [
            {
                id: 0,
                profilePhoto: '/assets/travelogPhoto/profile0.JPG',
                writer: '후리지아',
                date: new Date(2024, 0, 5).getTime(),
                comment: '좋은 여행후기 감사합니다.😃'
            },
            {
                id: 1,
                profilePhoto: '/assets/travelogPhoto/profile1.JPG',
                writer: '썬더보이',
                date: new Date(2024, 0, 5).getTime(),
                comment: '이번에 여행계획을 세우면서 많은 도움이 되었습니다🙉 저도 방문하셨던곳 들러서 좋은 추억 만들고 싶어요!'
            },
            {
                id: 2,
                profilePhoto: '/assets/travelogPhoto/profile2.JPG',
                writer: '하율맘',
                date: new Date(2024, 0, 5).getTime(),
                comment: '아이와 여행가려고 하는데 참고해야겠어요👍⭐'
            }
        ],
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2023, 11, 29)),
                day: [
                    {
                        id: 0,
                        place: '부산역',
                        memo: '부산도착',
                        photo: '/assets/travelogPhoto/travelPhoto_1.jpg'
                    },
                    {
                        id: 1,
                        place: '부산관광지1',
                        memo: '숙소도착',
                        photo: '/assets/travelogPhoto/travelPhoto_2.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 30)),
                day: [
                    {
                        id: 0,
                        place: '부산관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_3.jpg'
                    },
                    {
                        id: 1,
                        place: '부산관광지3',
                        memo: '차이나타운',
                        photo: '/assets/travelogPhoto/travelPhoto_4.jpg'
                    }
                ]
            },
            {
                id: 2,
                date: getStringDate(new Date(2023, 11, 31)),
                day: [
                    {
                        id: 0,
                        place: '부산역',
                        memo: '집으로',
                        photo: '/assets/travelogPhoto/travelPhoto_5.jpg'
                    }
                ]
            }
        ],
        recoNum: 124,
        commentNum: 23,
        downloadNum: 51,
     },
     {
        id : 1,
        title: '나 홀로 부산 새해 일출여행🌞',
        writer : '언제나 맑음',
        profileImg : '/profile1.JPG',
        travelImg : ['/travelPhoto_6.jpg', '/travelPhoto_7.jpg', '/travelPhoto_8.jpg', '/travelPhoto_9.jpg', '/travelPhoto_10.jpg'],
        date : {
            firstDay : new Date('2023-12-29').getTime(),
            lastDay : new Date('2024-1-1').getTime()
        },
        city : '부산',
        ment : '공휴일이 아까워서 간 여행이었는데 놀다보니 일출 보고 가고 싶어서 운좋게 1/1 비행기표 구해서 일출도 보고 왔어요.',
        commentInfo: [
            {
                id: 0,
                profilePhoto: '/assets/travelogPhoto/profile0.JPG',
                writer: '후리지아',
                date: new Date(2024, 0, 5).getTime(),
                comment: '좋은 여행후기 감사합니다.😃'
            },
            {
                id: 1,
                profilePhoto: '/assets/travelogPhoto/profile1.JPG',
                writer: '썬더보이',
                date: new Date(2024, 0, 5).getTime(),
                comment: '이번에 여행계획을 세우면서 많은 도움이 되었습니다🙉 저도 방문하셨던곳 들러서 좋은 추억 만들고 싶어요!'
            },
            {
                id: 2,
                profilePhoto: '/assets/travelogPhoto/profile2.JPG',
                writer: '하율맘',
                date: new Date(2024, 0, 5).getTime(),
                comment: '아이와 여행가려고 하는데 참고해야겠어요👍⭐'
            }
        ],
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2023, 11, 29)),
                day: [
                    {
                        id: 0,
                        place: '부산역',
                        memo: '부산도착',
                        photo: '/assets/travelogPhoto/travelPhoto_6.jpg'
                    },
                    {
                        id: 1,
                        place: '부산관광지1',
                        memo: '숙소도착',
                        photo: '/assets/travelogPhoto/travelPhoto_7.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 30)),
                day: [
                    {
                        id: 0,
                        place: '부산관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_8.jpg'
                    }
                ]
            },
            {
                id: 2,
                date: getStringDate(new Date(2023, 11, 31)),
                day: [
                    {
                        id: 0,
                        place: '부산관광지4',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_9.jpg'
                    }
                ]
            },
            {
                id: 3,
                date: getStringDate(new Date(2024, 0, 1)),
                day: [
                    {
                        id: 1,
                        place: '부산역',
                        memo: '집으로',
                        photo: '/assets/travelogPhoto/travelPhoto_10.jpg'
                    }
                ]
            }
        ],
        recoNum: 124,
        commentNum: 23,
        downloadNum: 51,
     },
     {
        id : 2,
        title: '아이와 함께 하는 제주 여행🏃‍♂️',
        writer : '서준맘',
        profileImg : '/profile2.JPG',
        travelImg : ['/travelPhoto_11.jpg', '/travelPhoto_12.jpg', '/travelPhoto_13.jpg', '/travelPhoto_14.jpg', '/travelPhoto_15.jpg'],
        date : {
            firstDay : new Date('2023-12-01').getTime(),
            lastDay : new Date('2023-12-03').getTime()
        },
        city : '제주',
        ment : '아이를 위한 아이로 인한 아이가 행복한 여행',
        commentInfo: [
            {
                id: 0,
                profilePhoto: '/assets/travelogPhoto/profile0.JPG',
                writer: '후리지아',
                date: new Date(2024, 0, 5).getTime(),
                comment: '좋은 여행후기 감사합니다.😃'
            },
            {
                id: 1,
                profilePhoto: '/assets/travelogPhoto/profile1.JPG',
                writer: '썬더보이',
                date: new Date(2024, 0, 5).getTime(),
                comment: '이번에 여행계획을 세우면서 많은 도움이 되었습니다🙉 저도 방문하셨던곳 들러서 좋은 추억 만들고 싶어요!'
            },
            {
                id: 2,
                profilePhoto: '/assets/travelogPhoto/profile2.JPG',
                writer: '하율맘',
                date: new Date(2024, 0, 5).getTime(),
                comment: '아이와 여행가려고 하는데 참고해야겠어요👍⭐'
            }
        ],
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2023, 11, 1)),
                day: [
                    {
                        id: 0,
                        place: '제주공항',
                        memo: '제주도착',
                        photo: '/assets/travelogPhoto/travelPhoto_11.jpg'
                    },
                    {
                        id: 1,
                        place: '제주관광지1',
                        memo: '숙소도착',
                        photo: '/assets/travelogPhoto/travelPhoto_12.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 2)),
                day: [
                    {
                        id: 0,
                        place: '제주관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_13.jpg'
                    }
                ]
            },
            {
                id: 2,
                date: getStringDate(new Date(2023, 11, 3)),
                day: [
                    {
                        id: 0,
                        place: '제주관광지3',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_14.jpg'
                    },
                    {
                        id: 2,
                        place: '제주공항',
                        memo: '집으로',
                        photo: '/assets/travelogPhoto/travelPhoto_15.jpg'
                    }
                ]
            }
        ],
        recoNum: 124,
        commentNum: 23,
        downloadNum: 51,
     }, 
     {
        id : 3,
        title: '여자혼자 연말 제주여행',
        writer : '서누',
        profileImg : '/profile2.JPG',
        travelImg : ['/travelPhoto_16.jpg', '/travelPhoto_17.jpg', '/travelPhoto_18.jpg', '/travelPhoto_19.jpg', '/travelPhoto_20.jpg'],
        date : {
            firstDay : new Date('2023-12-15').getTime(),
            lastDay : new Date('2023-12-18').getTime()
        },
        city : '제주',
        ment : '연말 제주여행을 결정하게된 이유는 바로 버킷리스트인 혼자 여행을 이루기 위해서! 혼자 빠르게 슝- 떠났습니다.',
        commentInfo: [
            {
                id: 0,
                profilePhoto: '/assets/travelogPhoto/profile0.JPG',
                writer: '후리지아',
                date: new Date(2024, 0, 5).getTime(),
                comment: '좋은 여행후기 감사합니다.😃'
            },
            {
                id: 1,
                profilePhoto: '/assets/travelogPhoto/profile1.JPG',
                writer: '썬더보이',
                date: new Date(2024, 0, 5).getTime(),
                comment: '이번에 여행계획을 세우면서 많은 도움이 되었습니다🙉 저도 방문하셨던곳 들러서 좋은 추억 만들고 싶어요!'
            },
            {
                id: 2,
                profilePhoto: '/assets/travelogPhoto/profile2.JPG',
                writer: '하율맘',
                date: new Date(2024, 0, 5).getTime(),
                comment: '아이와 여행가려고 하는데 참고해야겠어요👍⭐'
            }
        ],
        days: [
            {
                id: 0,
                date: getStringDate(new Date(2023, 11, 15)),
                day: [
                    {
                        id: 0,
                        place: '제주공항',
                        memo: '제주도착',
                        photo: '/assets/travelogPhoto/travelPhoto_16.jpg'
                    },
                    {
                        id: 1,
                        place: '제주관광지1',
                        memo: '숙소도착',
                        photo: '/assets/travelogPhoto/travelPhoto_17.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 16)),
                day: [
                    {
                        id: 0,
                        place: '제주관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_18.jpg'
                    }
                ]
            },
            {
                id: 2,
                date: getStringDate(new Date(2023, 11, 17)),
                day: [
                    {
                        id: 0,
                        place: '제주관광지3',
                        memo: '맛집 탐방',
                        photo: '/assets/travelogPhoto/travelPhoto_19.jpg'
                    }
                ]
            },
            {
                id: 2,
                date: getStringDate(new Date(2023, 11, 18)),
                day: [
                    {
                        id: 1,
                        place: '제주공항',
                        memo: '집으로',
                        photo: '/assets/travelogPhoto/travelPhoto_20.jpg'
                    }
                ]
            }
        ],
        recoNum: 124,
        commentNum: 23,
        downloadNum: 51,
     }
];
