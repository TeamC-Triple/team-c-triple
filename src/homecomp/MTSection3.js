import { useContext, useEffect, useState } from 'react';
import './MTSection3.css';

import { PlanDataContext } from '../App';
import MyTripListItem from "../home_subcomp/MyTripListItem";

const MTSection3 = () => {
    const MyTripList = useContext(PlanDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MyTripList);
    });
       
    const today = new Date().getTime();

    return(
        <div className="MTSection3">
            <h2>내 지난 여행</h2>
            <div className='mytrip_list'>
                <ul>
                    {data?.filter((triplist)=>
                    today-triplist.firstDate > 0
                ).sort((a, b)=> b.firstDate - a.firstDate).map((item) => <MyTripListItem key={item.id} {...item}/>)}
                </ul>
            </div>
        </div>
    );
};

export default MTSection3;