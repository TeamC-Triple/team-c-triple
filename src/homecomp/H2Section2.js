import { useContext, useEffect, useState } from 'react';

import './H2Section2.css';
import { TravelogContext } from '../App';
import TravelogFeed from '../home_subcomp/TravelogFeed';


const H2Section2 = () => {
    
    const TravelogData = useContext(TravelogContext);

    const [data, setData] = useState(TravelogData);

    useEffect(()=> {
        setData();
    }, [data])

    return (
        <div className="H2Section2">
            <div className="section_top">
                <h2 className="section_title">베스트 여행기</h2>
                <p className="go_more">더보기</p>
            </div>
            <TravelogFeed TravelogData={TravelogData} />
        </div>
    );
};

export default H2Section2;