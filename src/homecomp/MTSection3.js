import { useContext, useEffect, useState } from 'react';
import './MTSection3.css';

import { LogDataContext } from '../App';
import MyTripListItem from "../home_subcomp/MyTripListItem";

const MTSection3 = () => {
    const MyTripList = useContext(LogDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MyTripList);
    })

    return(
        <div className="MTSection3">
            <h2>내 지난 여행</h2>
            <div className='mytrip_list'>
                <ul>
                    {data.map((item) => <MyTripListItem key={item.id} {...item}/>)}
                </ul>
            </div>
        </div>
    );
};

export default MTSection3;