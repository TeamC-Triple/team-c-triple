import { useContext, useEffect, useState } from 'react';

import './MFSection1.css'
import { MyTripDataContext } from '../App.js';
import MyFeedItem from '../home_subcomp/MyFeedItem.js';
import Button from '../common/Button.js';

const MFSection1 = () => {
    const myTripList = useContext(MyTripDataContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(myTripList);
    }, [])

    return (
        <div className='MFSection1'>
            <div className='mfSection1_in'>
                <h2 className='section_title'>
                    나의 여행 피드
                </h2>
                <div className='myFeedList'>
                    <ul>
                        {data.map((it) => <MyFeedItem key={it.id} {...it} />)}
                    </ul>
                </div>
                <Button 
                    type={'gray_border'}
                    text={'나의 여행 피드 더보기'}
                />
            </div>
        </div>
    );
};

export default MFSection1;