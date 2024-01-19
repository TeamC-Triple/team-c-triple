import { useContext, useEffect, useState } from 'react';
import './MTSection4.css';

import { MyTripListDataContext } from '../App';
import MTSection4Item from '../home_subcomp/MTSection4Item';
import Button from '../common/Button';

const MTSection4 = () => {
    const MyTripList = useContext(MyTripListDataContext);

    const [data, setData] = useState([]);

    
    const [num, setNum] = useState(0);
    const slice = num + 3;

    useEffect(() => {
        setData(MyTripList);
    });

    const clickBtn = () => {
        setNum(num+3);
    };

    return(
        <div className="MTSection4">
            <h2>나의 여행기</h2>
            <div className='mytrip_list'>
                <ul>
                    {data.slice(0,slice).map((item) => <MTSection4Item key={item.id} {...item}/>)}
                </ul>
            </div>
            <Button type= {`gray_border ${num === 0 ? 'on' : 'off'}`} text={'나의 여행기 더보기'} onClick={clickBtn}/>
        </div>
    );
};

export default MTSection4;