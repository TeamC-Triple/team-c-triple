import { useContext, useEffect, useState } from 'react';

import { LogDataContext } from '../App.js';
import MyFeedItem from '../home_subcomp/MyFeedItem.js';
import Button from '../common/Button.js';
import styled from 'styled-components';

const MFSection1 = () => {
    const myTripList = useContext(LogDataContext);
    const [data, setData] = useState([]);
    const [num, setNum] = useState(0);
    const slice = num + 2;

    useEffect(() => {
        setData(myTripList);
    }, [])

    const clickListMore = () => {
        setNum(num+3);
    };

    return (
        <MFS1>
            <MfSection1_in>
                <h2 className='section_title'>
                    나의 여행 피드
                </h2>
                <MyFeedList>
                    <ul>
                        {data.slice(0,slice).map((it) => <MyFeedItem key={it.id} {...it} />)}
                    </ul>
                </MyFeedList>
                <Button 
                    type= {`gray_border ${num === 0 ? 'on' : 'off'}`}
                    text={'나의 여행 피드 더보기'}
                    onClick={clickListMore}
                />
            </MfSection1_in>
        </MFS1>
    );
};

export default MFSection1;
const MFS1 = styled.div`
    margin: 80px 0 40px;
`;

const MfSection1_in = styled.div`
    padding: 0 20px;

    h2{
        margin-bottom : 20px;
        font-size: 18px;
        font-weight: 700;
    }
    
    button{
        width: 100%;
    }
    button.on{
        display: block;
    }
    button.off{
        display: none;
    }
`;

const MyFeedList = styled.div`
    margin-bottom: 20px;
`;