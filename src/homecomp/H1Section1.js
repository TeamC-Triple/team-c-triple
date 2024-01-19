import { useContext, useEffect, useState } from 'react';
import MagaSlide from "react-slick";

import './H1Section1.css';
import { MagazineDataContext } from '../App.js';
import MagaSlideItem from '../home_subcomp/MagaSlideItem.js';


const H1Section1 = () => {
    const magazineList = useContext(MagazineDataContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(magazineList);
    }, [])

    const msSettings = {
        arrows : false,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
    };

    return (
        <div className="H1Section1">
            <div className='h1Section1_in'>
                <MagaSlide {...msSettings}>
                    {data.map((it) => (
                        <MagaSlideItem key={it.id} {...it} />
                    ))}
                </MagaSlide>
            </div>
        </div>
    );
};

export default H1Section1;