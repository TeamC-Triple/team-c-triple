import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header1 from "../common/Header1";
import Button from "../common/Button";
import HeaderIcon from "../common/HeaderIcon";
import SideBar from "../side/SideBar";
import styled from "styled-components";
import { PlanDataContext } from "../App";
import { useBodyScrollLock } from '../utill/useBodyScrollLock.js';

const LastTripLog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const LastTrip = useContext(PlanDataContext);

    const [data, setData] = useState([]);

    const [sidebar, setSidebar] = useState('off');
    const [isOpen, setIsOpen] = useState(false);
    
    const { lockScroll, openScroll } = useBodyScrollLock();

    const sideBtnClick = () => {
        setSidebar('on');
        lockScroll();
        setIsOpen(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (LastTrip?.length > 0) {
            const targetTrip = LastTrip?.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if (targetTrip) {
                setData(targetTrip);
            } else {
                alert('없는 여행기입니다.');
                navigate('/', { replace: true });
            };
        };
    }, [id, LastTrip]);

    return (
        <LastTripLogPage>
            <Header1
                leftChild={
                    <p onClick={() => (navigate(-1))}>
                        뒤로가기
                    </p>
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}
                        onClick={sideBtnClick}   
                    />
                }
            />
            <LastTripLogItem>
                <div className="title">
                    <p className="txt">지난</p>
                    <p className="city">{data.city} 여행</p>
                    <p className="date">{new Date(data.firstDate).toLocaleDateString()} - {new Date(data.lastDate).toLocaleDateString()}</p>
                </div>
            </LastTripLogItem>
            <MyTripPlan>
                <div className="plan_title">
                    나의 계획 일정
                </div>
                <div className="plan_List">
                    {data.days && data.days.map((it,idx)=>
                        <div key={idx} className="plan_Item">
                            <p className="plan_Id">{it.id+1}</p>
                            <p className="plan_Place">{it.place}</p>
                            <p className="plan_memo">{it.memo}</p>
                        </div>
                    )}
                </div>
            </MyTripPlan>
            <TravelWriteBtn>
                <div className="txt">
                    <p>즐거운 여행 되셨나요?</p>
                    <p>소중한 추억들을 기록하고, 여행 포인트도 쌓아보세요!</p>
                </div>
            </TravelWriteBtn>
            <Button type={'active'} text={'여행기 쓰기'}/>
            <SideBar 
                sidebar={sidebar} 
                setSidebar={setSidebar} 
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img src='/assets/travelogPhoto/profile0.jpg' />
                    </p>
                } 
                headTxt={'김이박님'} 
                setIsOpen={setIsOpen} 
                openScroll={openScroll} 
            />
        </LastTripLogPage>
        
    );
};

export default LastTripLog;

const LastTripLogPage = styled.div`
    .Header1{
        border-bottom: 1px solid transparent;
        background-color: #0BD0AF;
    }
    .head_btn_left{
        text-indent: -9999px;
    }
    .head_btn_left p{
        width: 24px;
        height: 24px;
        background-image: url(/assets/icon-cancel.svg);
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
        filter: invert(100%) sepia(15%) saturate(2%) hue-rotate(66deg) brightness(109%) contrast(101%);
    }
    .head_text{
        text-align: center;
    }
    .head_btn_right2{
        width: 24px;
        height: auto;
        background-image: url(/assets/icon-menu.svg);
        background-size: 24px auto;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        text-indent: -9999px;
        filter: invert(100%) sepia(15%) saturate(2%) hue-rotate(66deg) brightness(109%) contrast(101%);
    }
    .Button{
        padding: 0 20px;
        padding-bottom: 20px;
        background-color: #eee;
    }
    .Button .btn.active{
        width: 100%;
    }
`
const LastTripLogItem = styled.div`
    padding: 0 20px;
    padding-top: 70px;
    background-color: #0BD0AF;
    margin-bottom: 30px;
    .title>p{
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4em;
    }
    .city{
        margin-bottom: 20px;
    }
    .title>p.date{
        font-size: 14px;
        padding-bottom : 30px;
    }
`
const TravelWriteBtn = styled.div`
    background-color: #eee;
    padding: 20px 20px;
    padding-bottom: 10px;
    .txt>p{
        color: #666;
        font-size: 13px;
        text-align: center;
    }
`
const MyTripPlan = styled.div`
    padding: 0 20px;
    .plan_title{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .plan_List{
        margin-bottom: 20px;
    }
    .plan_Item{
        position: relative;
        display: flex;
        margin-right: 15px;
        padding: 15px;
    }
    .plan_Item::before{
        content: "";
        display: block;
        position: absolute;
        top: 35px;
        left: 25px;
        width: 1px;
        height: 30px;
        background-color: #ddd;
    }
    .plan_Item:last-child::before{
        display: none;
    }
    .plan_Item>p.plan_Id{
        display: inline-block;
        background-color: #9621F1;
        width: 20px;
        font-size: 11px;
        text-align: center;
        border-radius: 50px;
        color: #fff;
        margin-right: 10px;
    }
    .plan_Item>p.plan_Place{
        font-size: 12px;
        font-weight: 500;
        flex-grow: 1;
    }
    .plan_Item>p.plan_memo{
        width: 50px;
        text-align: center;
        font-size: 11px;
        color: #777;
    }
`