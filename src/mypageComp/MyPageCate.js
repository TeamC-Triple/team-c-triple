import { useState } from "react";
import styled from "styled-components";
import MypageMyTrip from "./MypageMyTrip";
import MypageLastTrip from "./MyPageLastTrip";
import MypageTravels from "./MyPageTravels";

const MypageCate = ({setCategory}) => {
    const [selectedCate, setSelectedCate] = useState('myTrip');

    const clickBtn = (cateName) => {
        setSelectedCate(cateName);
        setCategory(cateName);
    }


    return (
        <Mypagecate>
            <div className="category">
                <button 
                    onClick={() => clickBtn('myTrip')}
                    className={selectedCate==='myTrip' ? 'active' : ''}
                >
                    내 여행
                </button>
                <button 
                    onClick={() => clickBtn('lastTrip')}
                    className={selectedCate==='lastTrip' ? 'active' : ''}
                >
                    지난여행
                </button>
                <button 
                    onClick={() => clickBtn('travels')}
                    className={selectedCate==='travels' ? 'active' : ''}
                >
                    여행기
                </button>
            </div>
            <div className="mypageList">
                {selectedCate==='myTrip'
                    ? <MypageMyTrip />
                    : (selectedCate==='lastTrip')
                        ? <MypageLastTrip />
                        : <MypageTravels />
                }
            </div>
        </Mypagecate>
    );
};

export default MypageCate;

const Mypagecate = styled.div`
    padding-top: 150px;
    .category{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-top: 90px;
        background-color: #fff;
    }
    button{
        width: 33%;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
    }
    button.active{
        font-weight: 600;
        border-bottom: 2px solid #368FFF;
    }
`