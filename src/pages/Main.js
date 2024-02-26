import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useBodyScrollLock } from '../utill/useBodyScrollLock.js';

import Header1 from '../common/Header1';
import Footer1 from '../common/Footer1';
import HeaderIcon from '../common/HeaderIcon';
import SideBar from '../side/SideBar';
import BottomNavi from '../common/BottomNavi.js';
import AnimatedPages from '../AnimatedPages.js';


const Main = () => {
    const [sidebar, setSidebar] = useState('off');
    const [isOpen, setIsOpen] = useState(false);
    const { lockScroll, openScroll } = useBodyScrollLock();
    const navigate = useNavigate();

    const sideBtnClick = () => {
        setSidebar('on')
        lockScroll();
        setIsOpen(true);
    };

    return (
        <div id='Main'>
            <Header1
                headTxt={'김이박님'}
                onClickHeadTxt={()=>(navigate('/mypage'))}
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img src='/assets/travelogPhoto/profile0.JPG' />
                    </p>
                }
                rightChild1={
                    <HeaderIcon 
                        text={'일정짜기'}
                        onClick={() => (navigate('/newplan'))} 
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
            <Footer1 />
            <BottomNavi />
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
        </div>
    );
};

export default Main;