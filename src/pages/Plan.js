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

import { useContext, useEffect, useState } from "react";
import { PlanDataContext, PlanDispatchContext } from "../App";

import PlanCity from "../planComp/PlanCity";
import PlanKeyword from "../planComp/PlanKeyword";
import styled from "styled-components";
import PlanEdit from "../planComp/PlanEdit";


// [planKeyword]의 더미데이터
const withWho = [ '#친구와', '#연인과', '#아이와', '#부모님과' ];
const travelStyle = [ '#관광지', '#SNS핫플', '#힐링', '#맛집' ];

const Plan = () => {
    const PlanData = useContext(PlanDataContext);
    const { onCreatePlan } = useContext(PlanDispatchContext);

    // planCity
    // plancity 여닫음 상태변수
    const [isCity, setIsCity] = useState(false);
    // 선택한 도시 정보 담는 상태변수
    const [chosedCity, setChosedCity] = useState('');

    const handleCity = () => {
        setIsCity(!isCity);
    };


    
    return (
        <PlanDataControll>
            <PlanEdit 
                handleCity={handleCity}
                chosedCity={chosedCity}
            />
            <PlanCity isCity={isCity} setChosedCity={setChosedCity} handleCity={handleCity} />
            {/* <PlanKeyword withWho={withWho} travelStyle={travelStyle} /> */}
        </PlanDataControll>
    );
};

export default Plan;

const PlanDataControll = styled.div`

`;