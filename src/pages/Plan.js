/*
    ※ 필독
    - Plan.js는 화면에 노출되는 부분입니다.
    - 데이터 관리를 위해 부득이하게 개별 컴포넌트가 router를 통해 이동하는 방식이 아닌,
      Plan.js 안에서 각각의 단계들이 보여지고 <-> 보여지지 않는 방식으로 화면전환이 됩니다.
    - 작업중 화면 주소 : http://localhost:3000/plan
    - 본인의 작업 중 다른이의 작업이 겹쳐 불편할때는 주석처리를 해주세요.
    - 추후 브랜치 병합시에는 꼭 주석 해제 해주셔야 합니다.
    - 주석 해제 후에는 먼저 작업한 다른이들의 작업과 충돌이 되지 않는지 꼭 확인해주셔야 합니다.
    - 다른 팀원들에게 설명이 필요한 작업부분은 꼭 주석으로 설명을 붙여주시기 바랍니다.
    - 코드 정리시에도 꼭 주석을 붙여 다른팀원들이 작업시 햇갈리지 않게끔 부탁드립니다!
*/

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import PlanCity from "../planComp/PlanCity";
import PlanKeyword from "../planComp/PlanKeyword";
import styled from "styled-components";

// [planKeyword]의 더미데이터
const withWho = [ '#친구와', '#연인과', '#아이와', '#부모님과' ];
const travelStyle = [ '#관광지', '#SNS핫플', '#힐링', '#맛집' ];

const Plan = () => {
    // 헤더 검색창 부분 상태변수, 관련함수 시작
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const changeInput = (e) => {
        setSearch(e.target.value);
    };
    const onClickSearch = () => {};
    // 헤더 검색창 부분 끝

    const navigate = useNavigate();

    // [planCity] 선택용 상태변수
    const [choiceCity, setChoiceCity] = useState('');
    

    return (
        <PlanPage>
            <Header1 
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={() => {navigate(-1)}}
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
            <PlanCity search={search} />
            {/* <PlanKeyword withWho={withWho} travelStyle={travelStyle} /> */}
        </PlanPage>
    );
};

export default Plan;

const PlanPage = styled.div`
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