import { useContext, useEffect, useState } from 'react';
import './H1Section3.css';

import { RecoCourseDataContext } from '../App.js';
import RecoCourseItem from '../home_subcomp/RecoCourseItem.js';
import HCourseModal from '../home_subcomp/HCourseModal.js';

const H1Section3 = () => {
    const recoCourseList = useContext(RecoCourseDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(recoCourseList.slice(0, 2));
    }, [])

    const [PCModal, setPCModal] = useState(false);

    const PCMClick = () => {
        setPCModal(true);
    }

    return (
        <div className="H1Section3">
            <div className='section_top'>
                <h2 className='section_title'>
                    내 일정에 맞는<br />
                    트리플의 추천 코스
                </h2>
                <p className='go_more' onClick={PCMClick}>더보기</p>
            </div>
            <HCourseModal PCModal={PCModal} setPCModal={setPCModal} />
            <div className='coursList'>
                <ul>
                    {data.map((item) => <RecoCourseItem key={item.id} {...item} />)}
                </ul>
            </div>
        </div>
    );
};


export default H1Section3;