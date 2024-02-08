import { useContext, useEffect, useState } from "react";
import { RecoCourseDataContext } from "../App";
import PCSlide from "react-slick";
import PlanCourseModal from "../plan_subComp/PlanCourseModal";
import TourList from "../plan_subComp/TourList";
import styled from "styled-components";

const PlanCourse = ({chosedCity}) => {
    const recommendCourse = useContext(RecoCourseDataContext);

    const [course, setCourse] = useState([]);
    
    useEffect(()=>{
        setCourse(recommendCourse);
    })

    const PCSettings = {
        arrows : false,
        infinite : true,
        speed : 500,
        slidesToShow : 2,
        slidesToScroll : 2
    };

    return(
        <PC>
            <PCSlide {...PCSettings}>
                {
                    course.filter((it)=>{
                        if(it.city.includes(chosedCity)) {
                            return it;
                        }
                    }).map((item)=>(
                        <TourList key={item.id} {...item} course={course} />
                    ))
                }
            </PCSlide>
        </PC>
    )
}

export default PlanCourse;

const PC = styled.div`
    .slick-list{
        margin-top: 10px;
        flex-wrap: nowrap;
        box-sizing: border-box;
    }
    .slick-slide.slick-active{
        margin-right: -30px;
    }
`