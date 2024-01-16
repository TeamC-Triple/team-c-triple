import { useContext, useEffect, useState } from 'react';

import './H1Section2.css';
import { SpotsDataContext } from '../App';

import Best10 from '../home_subcomp/Best10';

const H1Section2 = () => {
    
    const SpotsData = useContext(SpotsDataContext);

    const [data, setData] = useState(SpotsData);

    useEffect(()=> {
        setData();
    }, [data])

    return (
        <div className="H1Section2">
            <div className="section_top">
                <h2 className="section_title">인기급상승<br />국내 여행지 BEST 10</h2>
            </div>
            <Best10 SpotsData={SpotsData} />
        </div>
    );
};

export default H1Section2;