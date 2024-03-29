import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { TravelogContext } from '../App';
import Button from "../common/Button.js";
import TravelogFeed from '../home_subcomp/TravelogFeed';
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
        <MFSec2>
            <Section_top>
                <Section_title>베스트 여행기</Section_title>
                <More>더보기</More>
            </Section_top>
            <TravelogFeed type={TravelogItem} data={data} />
            <Button 
                text={'베스트 여행기 더보기'}
                type={'gray_border'}  
                onClick={clickMore}
            />
        </MFSec2>
    );
};

export default MFSection2;

const MFSec2 = styled.div`
    overflow: hidden;
    padding-top: 30px;
    margin : 0 20px 60px 20px;
`

const Section_top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
