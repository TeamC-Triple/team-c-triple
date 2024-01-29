import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Header1 from "../common/Header1.js";
import HeaderIcon from "../common/HeaderIcon.js";
import CityLi from "../plan_subComp/CityLi.js";
import Button from "../common/Button.js";
import { CityDataContext } from "../App.js";


const PlanCity = ({isCity, setChosedCity, handleCity}) => {
    // 헤더 검색창 부분 상태변수, 관련함수 시작
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const changeInput = (e) => {
        setSearch(e.target.value);
    };
    const onClickSearch = () => {};
    // 헤더 검색창 부분 끝
    const cityData = useContext(CityDataContext);
    const [cityList, setCityList] = useState([]);
    const [checkCity, setCheckCity] = useState('');

    useEffect(() => {
        if(cityData){
            setCityList(cityData);
        };
    }, [isCity]);

    const closeCity = () => {
        handleCity();
    };

    const clickChoiceCity = () => {
        setChosedCity(checkCity);
        handleCity();
        console.log(checkCity);
    };

    return (
        <Plancity className={`plancity ${isCity ? 'on' : ''}`}>
            <Header1 
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={closeCity}
                />}
                // 헤더부분 추후에 어떤 페이지냐에 따라서 headTxt의 input태그 부분 보이고 <-> 보여지지 않고 처리할 예정. 지금은 그냥 두세요!
                headTxt={
                    <>
                        <input 
                            type="text"
                            placeholder="여행, 어디로 떠나시나요?"
                            value={search}
                            ref={searchRef}
                            onChange={changeInput}
                        />
                        <p 
                            className={`btnDel ${
                                search.length > 0
                                ? "show"
                                : ""
                            }
                            `} 
                            onClick={() => {setSearch('')}}
                        >
                            <span className="hide">삭제</span>
                        </p>
                    </>
                }
                rightChild2={<HeaderIcon 
                    text={'검색'}
                    onClick={onClickSearch}
                />}
            />
            <CityList>
                <div className="cl_top">
                    <h4>지역 선택</h4>
                </div>
                <div className="cl_list">
                    <ul>
                        {
                            cityList.filter((it) => {
                                if (search === "") {
                                    return it;
                                } else if (it.city.toLowerCase().includes(search.toLowerCase()) || it.place.toLowerCase().includes(search.toLowerCase())) {
                                    return it;
                                }
                            }).map((item) => (
                                <CityLi key={item.id} {...item} setCheckCity={setCheckCity} />
                            ))
                        }
                    </ul>
                </div>
            </CityList>
            <CityBtn>
                {
                    checkCity === ''
                    ? <Button type={'deActive'} text={'도시를 선택해주세요.'} onClick={() => {alert('도시를 선택하지 않았습니다.')}} />
                    : <Button type={'active'} text={`${checkCity} 선택 완료`} onClick={clickChoiceCity}  />
                }
                
            </CityBtn>
        </Plancity>
    );
};

export default PlanCity;

const Plancity = styled.div`
    position: fixed;
    bottom: -100%;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 850;
    background-color: #fff;
    transition: 0.4s ease;

    &.on{
        bottom: 0;
    }

    .Header1{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
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
const CityList = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    padding-top: 40px;
    padding-bottom: 90px;
    
    .cl_top{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        line-height: 38px;
        padding: 4px 20px 0;
        background-color: #eee;
        h4{
            line-height: 37px;
        }
    }
    .cl_list{
        height: calc(100vh - 180px);
        padding-top: 10px;
        overflow-y: scroll;

        ul{
            padding-bottom: 60px;
        }
    }
`;
const CityBtn = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 20px;
    background-color: #fff;
    z-index: 860;

    .btn{
        width: 100%;
    }
`;