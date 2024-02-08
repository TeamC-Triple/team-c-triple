// data_myTripList.js
import { getStringDate } from "../utill/dateString"

export const dummyMyTripList = [
    {
        id: 0,
        title: '제일 넓게 보는 바다, 흰 여울 문화마을',
        city: '부산',
        firstDate: new Date(2023, 2, 1).getTime(),
        lastDate: new Date(2023, 2, 2).getTime(),
        recoNum: 124,
        commentNum: 23,
        downloadNum: 51,
        profileImg : '/profile0.JPG',
        photo:['/assets/myTripList_busan_photo01.jpg', '/assets/myTripList_busan_photo02.jpg', '/assets/myTripList_busan_photo03.jpg', '/assets/myTripList_busan_photo04.jpg', '/assets/myTripList_busan_photo05.jpg'],
        reviewTxt: '복천사와 흰 여울 문화마을은 꼭! 절대! 굽있는 신발 사절이요!! 발목은 하이힐신고 등산해도 상관없다는 분은 상관no no 복천사 경사와 거기까지 가는 길이 골목이라흠....혼자가긴 위험할 것 같아유 야경이 이쁘다지만 낮에 보는것도 이쁨♡ 바다와 파란 느낌이 어우러지는 마을 안 헤일르 카페는 통창이 크고 지대가 높아 편히 넓은 바다를 내려다볼수 있어요! 겨울이지만 많이 걸어 더운 시간에 아이스크림 딱♡ 루프탑도 조용하고 뷰도 걸리적거리는것 없이 좋아요 물론! 마을 안이니 루프탑에서 조용한 건 매너 소품점도 귀엽고 파는 포스터나 물품도 너무 귀여워서 고양이 배 보이는 마우스패드 get!! 바다를 너무 좋아하는 저로서는 어디든 넓고 광활한게 바다지만 눈 안에 제일 넓게 볼 수 있었던 흰 여울 문화마을 대만족이었답니다❤️❤️❤️',
        keyword: [],
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
                date: getStringDate(new Date(2023, 2, 1)),
                day: [
                    {
                        id: 0,
                        place: '인천역',
                        memo: '인천도착',
                        photo: '/assets/myTripList_busan_photo01.jpg'
                    },
                    {
                        id: 1,
                        place: '인천관광지1',
                        memo: '숙소도착',
                        photo: '/assets/myTripList_busan_photo02.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 2, 2)),
                day: [
                    {
                        id: 0,
                        place: '인천관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/myTripList_busan_photo03.jpg'
                    },
                    {
                        id: 1,
                        place: '인천관광지3',
                        memo: '차이나타운',
                        photo: '/assets/myTripList_busan_photo04.jpg'
                    },
                    {
                        id: 2,
                        place: '인천역',
                        memo: '집으로',
                        photo: '/assets/myTripList_busan_photo05.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        title: '6월 여름 강원도 강릉 1박 2일 여행',
        city: '강릉',
        firstDate: new Date(2023, 5, 6).getTime(),
        lastDate: new Date(2023, 5, 7).getTime(),
        recoNum: 168,
        commentNum: 50,
        downloadNum: 65,
        profileImg : '/profile0.JPG',
        photo:['/assets/myTripList_gangneung_photo01.jpg','/assets/myTripList_gangneung_photo02.jpg','/assets/myTripList_gangneung_photo03.jpg','/assets/myTripList_gangneung_photo04.jpg','/assets/myTripList_gangneung_photo05.jpg'],
        reviewTxt: '📌친구 4명이서 떠난 여름휴가 강릉여행 📌강릉KTX타고와서 강릉에서만 쏘카빌리기 📌SNS핫플만 골라서 여유롭게 다니기',
        keyword: [],
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
                date: getStringDate(new Date(2023, 5, 6)),
                day: [
                    {
                        id: 0,
                        place: '강릉역',
                        memo: '강릉도착',
                        photo: '/assets/myTripList_gangneung_photo01.jpg'
                    },
                    {
                        id: 1,
                        place: '강릉관광지1',
                        memo: '숙소도착',
                        photo: '/assets/myTripList_gangneung_photo02.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 5, 7)),
                day: [
                    {
                        id: 0,
                        place: '강릉관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/myTripList_gangneung_photo03.jpg'
                    },
                    {
                        id: 1,
                        place: '강릉관광지3',
                        memo: '차이나타운',
                        photo: '/assets/myTripList_gangneung_photo04.jpg'
                    },
                    {
                        id: 2,
                        place: '강릉역',
                        memo: '집으로',
                        photo: '/assets/myTripList_gangneung_photo05.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: '2023 겨울 메리크리스마스 제주 여행',
        city: '제주',
        firstDate: new Date(2023, 11, 24).getTime(),
        lastDate: new Date(2023, 11, 25).getTime(),
        recoNum: 238,
        commentNum: 135,
        downloadNum: 102,
        photo:['/assets/myTripList_jeju_photo01.jpg','/assets/myTripList_jeju_photo02.jpg','/assets/myTripList_jeju_photo03.jpg','/assets/myTripList_jeju_photo04.jpg','/assets/myTripList_jeju_photo05.jpg'],
        reviewTxt: '한라산을 위한 여행이었지만 뜻 밖의 폭설로 모든 것이 바뀐 여행 하지만 제주는 다른 것이 가득한 행복한 곳',
        keyword: [],
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
                date: getStringDate(new Date(2023, 11, 24)),
                day: [
                    {
                        id: 0,
                        place: '제주공항',
                        memo: '제주도착',
                        photo: '/assets/myTripList_jeju_photo01.jpg'
                    },
                    {
                        id: 1,
                        place: '제주관광지1',
                        memo: '숙소도착',
                        photo: '/assets/myTripList_jeju_photo02.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2023, 11, 25)),
                day: [
                    {
                        id: 0,
                        place: '제주관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/myTripList_jeju_photo03.jpg'
                    },
                    {
                        id: 1,
                        place: '제주관광지3',
                        memo: '차이나타운',
                        photo: '/assets/myTripList_jeju_photo04.jpg'
                    },
                    {
                        id: 2,
                        place: '제주공항',
                        memo: '집으로',
                        photo: '/assets/myTripList_jeju_photo05.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: '경주 나홀로 여행',
        city: '경주',
        firstDate: new Date(2024, 0, 1).getTime(),
        lastDate: new Date(2024, 0, 2).getTime(),
        recoNum: 98,
        commentNum: 34,
        downloadNum: 20,
        photo:['/assets/myTripList_gyeongJu_photo01.jpg','/assets/myTripList_gyeongJu_photo02.jpg','/assets/myTripList_gyeongJu_photo03.jpg','/assets/myTripList_gyeongJu_photo04.jpg','/assets/myTripList_gyeongJu_photo05.jpg'],
        reviewTxt: '경주가 처음이며 나홀로 여행이신 분들에게 추천하는 코스입니다~! 첨성대는 낮,밤 모두 예쁘고 동궁과 월지는 노을 질 때를 추천하며 월정교는 해진 후에 대릉원은 밝을 때 방문하는 것을 추천드립니다!!!',
        keyword: [],
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
                date: getStringDate(new Date(2024, 0, 1)),
                day: [
                    {
                        id: 0,
                        place: '경주역',
                        memo: '경주도착',
                        photo: '/assets/myTripList_gyeongJu_photo01.jpg'
                    },
                    {
                        id: 1,
                        place: '경주관광지1',
                        memo: '숙소도착',
                        photo: '/assets/myTripList_gyeongJu_photo02.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 0, 2)),
                day: [
                    {
                        id: 0,
                        place: '경주관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/myTripList_gyeongJu_photo03.jpg'
                    },
                    {
                        id: 1,
                        place: '경주관광지3',
                        memo: '차이나타운',
                        photo: '/assets/myTripList_gyeongJu_photo04.jpg'
                    },
                    {
                        id: 2,
                        place: '경주역',
                        memo: '집으로',
                        photo: '/assets/myTripList_gyeongJu_photo05.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: '영종도 여행❤️',
        city: '인천',
        firstDate: new Date(2024, 0, 5).getTime(),
        lastDate: new Date(2024, 0, 6).getTime(),
        recoNum: 56,
        commentNum: 22,
        downloadNum: 15,
        photo:['/assets/myTripList_incheon_photo01.jpg','/assets/myTripList_incheon_photo02.jpg','/assets/myTripList_incheon_photo03.jpg','/assets/myTripList_incheon_photo04.jpg','/assets/myTripList_incheon_photo05.jpg'],
        reviewTxt: '2023년 마무리 여행으로 숙소를 에어비앤비로 저렴하게 왔는데 인테리어도 너무 예쁘고 깔끔했다. 그리고 유명한 카페랑 음식점이 숙소 근처에 다 있어서 너무 편했다👍🏻 날씨는 좋지 않았지만 부지런히 움직여서 사람들이 많이 없을때 딱 먹고 잘 빠져서 편하게 구경하고 먹을수 있었다',
        keyword: [],
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
                date: getStringDate(new Date(2024, 0, 5)),
                day: [
                    {
                        id: 0,
                        place: '인천역',
                        memo: '인천도착',
                        photo: '/assets/myTripList_incheon_photo01.jpg'
                    },
                    {
                        id: 1,
                        place: '인천관광지1',
                        memo: '숙소도착',
                        photo: '/assets/myTripList_incheon_photo02.jpg'
                    }
                ]
            },
            {
                id: 1,
                date: getStringDate(new Date(2024, 0, 6)),
                day: [
                    {
                        id: 0,
                        place: '인천관광지2',
                        memo: '맛집 탐방',
                        photo: '/assets/myTripList_incheon_photo03.jpg'
                    },
                    {
                        id: 1,
                        place: '인천관광지3',
                        memo: '차이나타운',
                        photo: '/assets/myTripList_incheon_photo04.jpg'
                    },
                    {
                        id: 2,
                        place: '인천역',
                        memo: '집으로',
                        photo: '/assets/myTripList_incheon_photo05.jpg'
                    }
                ]
            }
        ]
    }
];