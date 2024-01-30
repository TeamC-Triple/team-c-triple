import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useBodyScrollLock } from '../utill/useBodyScrollLock.js';

import Header1 from '../common/Header1.js';
import HeaderIcon from '../common/HeaderIcon.js';
import SideBar from '../side/SideBar.js';
import BottomNaviSub from '../common/BottomNaviSub.js';
import AnimatedPages from '../AnimatedPages.js';
import styled from 'styled-components';
import Popup from '../planComp/Popup.js';
import PopupList from '../plan_subComp/PopupList.js';

const PlanLayOut = () => {
    const [sidebar, setSidebar] = useState('off');
    const [popUp, setPopUp] = useState('off');
    const [isOpen, setIsOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { lockScroll, openScroll } = useBodyScrollLock();
    const navigate = useNavigate();

    const sideBtnClick = () => {
        setSidebar('on')
        lockScroll();
        setIsOpen(true);
    };

    const clickShare = () => {
        setPopUp('on')
        lockScroll();
        setIsPopupOpen(true);
    };

    return (
        <PlanLayout>
            <Header1
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={() => {navigate(-1)}}
                />}
                rightChild1={
                    <HeaderIcon 
                        text={'일정공유'}
                        onClick={clickShare}
                    />
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}   
                        onClick={sideBtnClick}
                    />
                }
            />
            <AnimatedPages>
                <Outlet />
            </AnimatedPages>
            <BottomNaviSub center={'plan'} />
            <SideBar 
                sidebar={sidebar} 
                setSidebar={setSidebar} 
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img />
                    </p>
                } 
                headTxt={'김이박님'} 
                setIsOpen={setIsOpen} 
                openScroll={openScroll} 
            />
            <Popup 
                title={'일정 공유하기'}
                list1={<PopupList content={'일행과 함께 일정 짜기'} />}
                list2={<PopupList content={'일정 링크 공유하기(보기 전용)'} />}
                popUp={popUp}
                setPopUp={setPopUp}
                setIsPopupOpen={setIsPopupOpen}
                openScroll={openScroll}
            />
        </PlanLayout>
    );
};

export default PlanLayOut;

const PlanLayout = styled.div`
    .head_btn_left, .head_btn_right1, .head_btn_right2{
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
    .head_btn_right1{
        background-image: url(/assets/icon-share.svg);
    }
    .head_btn_right2{
        margin-left: 18px;
        background-image: url(/assets/icon-menu.svg);
    }

    // 플랜시티 헤더부분 공유버튼 없애기
    .plancity .head_btn_right1{
        display: none;
    }
`;