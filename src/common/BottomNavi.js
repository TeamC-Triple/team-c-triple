import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BottomNavi = ({}) => {
    const [activeTab, setActiveTab] = useState('/');

    const location = useLocation();
    
    useEffect(()=>{
        setActiveTab(`${location.pathname}`)
    },[activeTab]);

    return (
        <BottomNav>
            <Link 
                to='/feed'
                onClick={() => setActiveTab('/feed')}
            >
                <div>
                    {activeTab === '/feed'
                        ? <BTNVIconOn>
                            <img src={`./assets/icon-bottom-feed-on.svg`} alt={`feed-on`} />
                        </BTNVIconOn>
                        : <BTNVIconOff>
                            <img src={`./assets/icon-bottom-feed-off.svg`} alt={`feed-off`} />
                            <span>여행기 피드</span>
                        </BTNVIconOff>
                    }
                </div>
            </Link>
            <Link 
                to='/'
                onClick={() => setActiveTab('/')}
            >
                <div>
                    {activeTab === '/'
                        ? <BTNVIconOn>
                            <img src={`./assets/icon-bottom-home-on.svg`} alt={`home-on`} />
                        </BTNVIconOn>
                        : <BTNVIconOff>
                            <img src={`./assets/icon-bottom-home-off.svg`} alt={`home-off`} />
                            <span>홈</span>
                        </BTNVIconOff>
                    }
                </div>
            </Link>
            <Link 
                to='/travel'
                onClick={() => setActiveTab('/travel')}
            >
                <div>
                    {activeTab === '/travel'
                        ? <BTNVIconOn>
                            <img src={`./assets/icon-bottom-travel-on.svg`} alt={`travel-on`} />
                        </BTNVIconOn>
                        : <BTNVIconOff>
                            <img src={`./assets/icon-bottom-travel-off.svg`} alt={`travel-off`} />
                            <span>나의 여행</span>
                        </BTNVIconOff>
                    }
                </div>
            </Link>
        </BottomNav>
    );
};

export default BottomNavi;


const BottomNav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
    z-index: 600;

    div{
        width: 60px;
        height: 40px;
        margin: 0 6vw;
    }
`;
const BTNVIconOff = styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    line-height: 1em;
    text-align: center;
    font-size: 11px;
    color: #666;
    
    img{
        width: 28px;
        height: 28px;
        margin: -3px auto 0;
        object-fit: cover;
    }
`;
const BTNVIconOn = styled.p`
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;