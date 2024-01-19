import { useContext, useEffect, useState } from 'react';

import './MFSection2.css';
import { TravelogContext } from '../App';
import HotTL_item from '../home_subcomp/HotTL_item.js';
import TravelogFeed from '../home_subcomp/TravelogFeed';
import Button from "../common/Button.js";
import TravelogItem from '../home_subcomp/TravelogItem.js';


const MFSection2 = () => {
    
    const TravelogData = useContext(TravelogContext);


    const [data, setData] = useState(TravelogData.slice(0, 3));
    const [isMore,  setIsMore] = useState(false);

    useEffect(()=> {
        if(isMore) {
            setData(TravelogData)
        } else {
            setData(TravelogData.slice(0, 3))
        }
    }, [isMore])

    const clickMore = (e) =>{   
        setIsMore(true);
        e.target.style.display = 'none';
    }
    return (
        <div className="MFSection2">
            <div className="MF2_box">
                <div className="section_top">
                    <h2 className="section_title">베스트 여행기</h2>
                    <p className="go_more">더보기</p>
                </div>
                <TravelogFeed type={TravelogItem} data={data} />
                <Button 
                    text={'베스트 여행기 더보기'}
                    type={'gray_border'}  
                    onClick={clickMore}
                />
            </div>
            <div className="MFSection3">
                <div className="section_top">
                    <h2 className="section_title">인기 급상승 여행기</h2>
                    <p className="go_more">더보기</p>
                </div>
                </div>
                <TravelogFeed type={HotTL_item} data={data} />
                <Button 
                    text={'인기 급상승 여행기 더보기'}
                    type={'gray_border'}  
                    onClick={clickMore}
                />
        </div>
    );
};

export default MFSection2;