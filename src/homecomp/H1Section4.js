import { useContext, useEffect, useState } from 'react';
import './H1Section1.css';

import { MagazineDataContext } from '../App';
import MagazineItem from '../home_subcomp/MagazineItem';

const H1Section4 = () => {
    const MagazineList = useContext(MagazineDataContext);

    const [data, setData] = useState([]);

    const [num, setNum] = useState(0)
    const slice = num + 3

    useEffect(()=>{
        setData(MagazineList);
    },[])

    const clickBtn = () => {
        setNum(num+3);
    }

    return (
        <div className="H1Section4">
            <div className='section_top'>
                <h2 className='section_title'>트리플 매거진</h2>
                <p className='go_more'>더보기</p>
            </div>
            <div className='MagazineList'>
                <ul>
                    {data.slice(0,slice).map((item)=> <MagazineItem key={item.id} {...item} />)}
                </ul>
            </div>
            <button className={num === 0 ? 'on' : 'off'} onClick={clickBtn}>트리플 매거진 더보기</button>
        </div>
    );
};

export default H1Section4;