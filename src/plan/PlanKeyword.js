import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import Button from "../common/Button";
import Header1 from "../common/Header1";
import { useState } from "react";

const withWho = [ '#친구와', '#연인과', '#아이와', '#부모님과' ];
const travelStyle = [ '#관광지', '#SNS핫플', '#힐링', '#맛집' ];


const PlanKeyword = () => {
    const navigate = useNavigate();

    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick)
    };

    return(
        <MainWrap>
            <Header1
                leftChild={
                    <p onClick={()=>(navigate(-1))}>
                        뒤로가기
                    </p>
                }
            />
            <ContentsWrap>
                <MainTitle>여행 키워드 선택</MainTitle>
                <SubWrap>
                    <SubTitle>인원수</SubTitle>
                    <KeywordBtn>
                        {withWho.map((it)=>(
                            <Button 
                                key={it}
                                text={it}
                                type={isClick ? 'active' : 'deActive'}
                                onClick={()=>{handleClick(it)}} 
                            />
                        ))} 
                    </KeywordBtn>
                </SubWrap>
                <SubWrap>
                    <SubTitle>여행 스타일</SubTitle>
                    <KeywordBtn>
                        {travelStyle.map((it)=>(
                            <Button 
                                key={it}
                                text={it}
                                type={isClick ? 'active' : 'deActive'}
                                onClick={()=>{handleClick(it)}} 
                            />
                        ))}  
                    </KeywordBtn>
                </SubWrap>
            </ContentsWrap>
            <BottomBtn>
                <Button
                text={'키워드 선택'}
                type={'active'}  
                />
                <StopChoose>다음에 선택하기</StopChoose>
            </BottomBtn>
        </MainWrap>
    );
} 

export default PlanKeyword;

const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .Header1 .head_btn_left p{
        width: 24px;
        height: 24px;
        background-image: url('../assets/icon-arrow-left.svg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        text-indent: -9999px;
    }
`
const ContentsWrap = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`
const MainTitle = styled.div`
    margin : 0 0 40px 20px;
    font-size: 18px;
    font-weight: 700;
`
const SubTitle = styled.div`
    margin : 0 0 20px 0;
    font-size: 16px;
    font-weight: 600;
`
const SubWrap = styled.div`
    margin : 0 10px 40px 20px;

    .btn.active, .btn.deActive{
        border-radius: 20px;
    }
`
const KeywordBtn = styled.div`
    display: flex;
    .Button{
        width : 25%;
        margin-right : 10px;
    }
    button{
        width : 100%;
    }
`
const BottomBtn = styled.div`
    position: fixed;
    bottom: 16px;
    left: 20px;
    right: 20px;
    button{
        width : 100%;
    }
`
const StopChoose = styled.div`
    margin-top : 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color : #444;
`