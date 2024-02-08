import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CityDataContext, LogDataContext, MagazineDataContext, TravelogContext } from "../App";

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import RecentLi from "../searchMainComp/RecentLi";
import { truncate } from "../utill/truncate.js";

const bestSearchKeyword = [
    { id: 0, keyword: '제주' }, { id: 1, keyword: '오사카' }, { id: 2, keyword: '후쿠오카' }, { id: 3, keyword: '나트랑' }, { id: 4, keyword: '부산' }, { id: 5, keyword: '방콕' }, { id: 6, keyword: '삿포로 1일 투어' },
]

const MainSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [logData, setLogData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const dataId = useRef(0);

    const navigate = useNavigate();
    const magazineList = useContext(MagazineDataContext);
    const myLogList = useContext(LogDataContext);
    const trLogList = useContext(TravelogContext);
    const cityList = useContext(CityDataContext);

    useEffect(() => {
        setData(magazineList);
        setLogData([...myLogList, ...trLogList]);
        setCityData(cityList);
    }, []);

    const handleChange = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    };

    const onCreateSearchResult = (inputData) => {
        const newSearchResult = {
            id: dataId.current,
            inputData: inputData
        };
        dataId.current += 1;
        setSearchResult([newSearchResult, ...searchResult]);
    }
    const onClickSearchInput = () => {
        if (searchInput.length <= 0) {
            return;
        }
        onCreateSearchResult(searchInput);
        setSearchInput('');
    };
    const onDeleteSearchResult = (targetId) => {
        setSearchResult(
            searchResult.filter((it) => it.id !== targetId)
        )
    }


    return (
        <Mainsearch>
            <Header1
                leftChild={<HeaderIcon
                    text={'뒤로가기'}
                    onClick={() => { navigate(-1) }}
                />}
                headTxt={
                    <>
                        <input
                            type="text"
                            placeholder="도시, 장소, 키워드 등 검색"
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <p
                            className={`btnDel ${searchInput.length > 0
                                ? "show"
                                : ""
                                }
                            `}
                            onClick={() => { setSearchInput('') }}
                        >
                            <span className="hide">삭제</span>
                        </p>
                    </>
                }
                rightChild2={<HeaderIcon
                    text={'검색'}
                    onClick={onClickSearchInput}
                />}
            />
            <SearchContents>
                <ContentBox>
                    <h3>인기 검색어</h3>
                    <ul className="best">
                        {
                            bestSearchKeyword.map((it) => (
                                <li key={it.id} onClick={() => { setSearchInput(`${it.keyword}`) }}>
                                    {it.keyword}
                                </li>
                            ))
                        }
                    </ul>
                </ContentBox>
                <ContentBox>
                    <h3>최근 검색어</h3>
                    <ul className="recent">
                        {searchResult.map((it) => (
                            <RecentLi key={it.id} {...it} onDeleteSearchResult={onDeleteSearchResult} />
                        ))}
                    </ul>
                </ContentBox>
                {
                    searchInput.length <= 0 ? (
                        null
                    ) : (
                        <ContentBox>
                            <h3>도시</h3>
                            {cityData.filter((it) => {
                                if (searchInput === "") {
                                    return null;
                                } else if (it.place.toLowerCase().includes(searchInput.toLowerCase()) || it.city.toLowerCase().includes(searchInput.toLowerCase()) || it.val.toLowerCase().includes(searchInput.toLowerCase())) {
                                    return it;
                                }
                            }).length === 0 ? (
                                <p>검색결과가 없습니다.</p>
                            ) : (
                                cityData.filter((it) => {
                                    if (searchInput === "") {
                                        return null;
                                    } else if (it.place.toLowerCase().includes(searchInput.toLowerCase()) || it.city.toLowerCase().includes(searchInput.toLowerCase()) || it.val.toLowerCase().includes(searchInput.toLowerCase())) {
                                        return it;
                                    }
                                }).map(it => (
                                    <div key={it.id} className="maga">
                                        <p className="photo"><img src={`./assets/city_${it.val}.jpg`} /></p>
                                        <p className="title">{it.city}</p>
                                    </div>
                                ))
                            )}
                        </ContentBox>
                    )
                }
                {
                    searchInput.length <= 0 ? (
                        null
                    ) : (
                        <ContentBox>
                            <h3>트리플 매거진</h3>
                            {data.filter((val) => {
                                if (searchInput === "") {
                                    return null;
                                } else if (val.magaTitle.toLowerCase().includes(searchInput.toLowerCase())) {
                                    return val;
                                }
                            }).length === 0 ? (
                                <p>검색결과가 없습니다.</p>
                            ) : (
                                data.filter((val) => {
                                    if (searchInput === "") {
                                        return null;
                                    } else if (val.magaTitle.toLowerCase().includes(searchInput.toLowerCase())) {
                                        return val;
                                    }
                                }).map(it => (
                                    <div key={it.id} className="maga">
                                        <p className="photo"><img src={`./assets/${it.magaPhoto}.webp`} /></p>
                                        <p className="title">{truncate(it.magaTitle, 25)}</p>
                                    </div>
                                ))
                            )}
                        </ContentBox>
                    )
                }
                {
                    searchInput.length === 0 ? (
                        null
                    ) : (
                        <ContentBox>
                            <h3>여행기</h3>
                            { logData.length !== 0 && logData.filter((val) => {
                                if (searchInput === "") {
                                    return null;
                                } else if (val.title.toLowerCase().includes(searchInput.toLowerCase()) || val.city.toLowerCase().includes(searchInput.toLowerCase())) {
                                    return val;
                                }
                            }).length === 0 ? (
                                <p>검색결과가 없습니다.</p>
                            ) : (
                                logData.length !== 0 && logData.filter((val) => {
                                    if (searchInput === "") {
                                        return null;
                                    } else if (val.title.toLowerCase().includes(searchInput.toLowerCase()) || val.city.toLowerCase().includes(searchInput.toLowerCase())) {
                                        return val;
                                    }
                                }).map((it, idx) => (
                                    <div key={it.idx} className="maga">
                                        {/* <p className="photo"><img src={it.photo.length !== 0 && it.travelImg.length !== 0 ? `${it.photo[0]}` || `assets/travelogPhoto/${it.travelImg[0]}` : ''} /></p> */}
                                        <p className="title">{truncate(it.title, 25)}</p>
                                    </div>
                                ))
                            )}
                        </ContentBox>
                    )
                }
            </SearchContents>
        </Mainsearch>
    );
};

export default MainSearch;

const Mainsearch = styled.div`
    .hd_left{
        width: 100%;
    }
    .head_btn_left, .head_btn_right2{
        width: 24px;
        height: 24px;
        text-indent: -99999px;
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_btn_left{
        background-image: url(/assets/icon-arrow-left.svg);
    }
    .head_btn_right2{
        background-image: url(/assets/icon-search.svg);
    }
    .head_text{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 20px;
        input{
            margin-top: 3px;
            width: calc(100% - 26px);
            height: 50px;
            border: 0;
        }
        input:focus{
            outline: 0;
        }
        input::placeholder{
            color: #368FFF;
        }
        .btnDel{
            display: none;
            position: relative;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #ddd;
            &::after, &::before{
                content: "";
                display: block;
                position: absolute;
                top: 5px;
                left: 11px;
                width: 2px;
                height: 14px;
                border-radius: 2px;
                background-color: #fff;
            }
            &::after{
                transform: rotate(45deg);
            }
            &::before{
                transform: rotate(135deg);
            }
        }
        .btnDel.show{
            display: block;
        }
    }
`;
const SearchContents = styled.div`
    padding: 60px 0;
`;
const ContentBox = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eee;
    font-size: 13px;

    & > p{
        padding: 0 20px;
    }

    h3{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
    }
    .best{
        display: flex;
        flex-wrap: wrap;

        li{
            padding: 6px 15px;
            background-color: #f3f3f3;
            border-radius: 30px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
    .recent{
        li{
            display: flex;
            justify-content: space-between;
            padding: 6px 20px;
            border-radius: 30px;
            background-color: #f3f3f3;

            button{
                width: 20px;
                height: 20px;
                text-indent: -99999px;
                background-image: url('./assets/icon-cancel.svg');
                background-repeat: no-repeat;
                background-size: 12px auto;
                background-position: center;
            }
        }
    }
    .maga{
        display: flex;
        margin-bottom: 12px;
        padding: 0 20px;

        .photo{
            width: 24px;
            height: 24px;
            margin-right: 10px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 200%;
                height: 200%;
                object-fit: cover;
            }
        }

        .title{
            font-weight: 500;
        }

        &:last-child{
            margin-bottom: 0;
        }
    }
`;