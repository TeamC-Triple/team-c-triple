import { useContext, useEffect, useState } from 'react';
import './MTSection4.css';

import { MyTripListDataContext } from '../App';
import MTSection4Item from '../home_subcomp/MTSection4Item';

const MTSection3 = () => {
    const MyTripList = useContext(MyTripListDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MyTripList);
    })

    return(
        <div className="MTSection3">
            <h2>나의 여행기</h2>
            <div className='mytrip_list'>
                <ul>
                    {data.map((item) => <MTSection4Item key={item.id} {...item}/>)}
                </ul>
            </div>
        </div>
    );
};

export default MTSection3;