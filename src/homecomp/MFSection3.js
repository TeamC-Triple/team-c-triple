import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { TravelogContext } from '../App';
import HotTL_item from '../home_subcomp/HotTL_item.js';
import TravelogFeed from '../home_subcomp/TravelogFeed';
import Button from "../common/Button.js";


const MFSection3 = () => {
    
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
            <MFSec3>
                <Section_top>
                    <Section_title>인기 급상승 여행기</Section_title>
                    <More className="go_more">더보기</More>
                </Section_top>
                <TravelogFeed type={HotTL_item} data={data} />
                <Button 
                    text={'인기 급상승 여행기 더보기'}
                    type={'gray_border'}  
                    onClick={clickMore}
                />
            </MFSec3>
    );
};

export default MFSection3;

const MFSec3 = styled.div`
    overflow: hidden;
    padding-top: 30px;
    margin: 0 20px 60px 20px;
`

const Section_top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 30px 0;
`
const Section_title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5em;
`
const More = styled.p`
    font-size: 12px;
    color: #368FFF;
`