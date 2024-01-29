import styled from "styled-components";
import Accodion from "../side/accordion/Accordion";
import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import { RecoCourseDataContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";

const PlanCourseModal = ({chosedCity, PCModal, setPCModal}) => {
    const closePCM = () => {
        setPCModal(false);
    }

    const recommendCourse = useContext(RecoCourseDataContext);

    const [course, setCourse] = useState([]);
    
    useEffect(()=>{
        setCourse(recommendCourse)
    })
    
    return(
        <PCM className={PCModal ? 'on' : 'off'}>
            <Header1 
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={closePCM}
                />} 
            />
            <div className="main">
                <h2>트리플의 추천 코스</h2>
                {
                    course.filter((it)=>{
                        if(it.city.toLowerCase().includes(chosedCity.toLowerCase())) {
                            return it;
                        }
                    }).map((item)=>(
                        <Accodion key={item.id} {...item} course={course} />
                    ))
                }
            </div>
        </PCM>
    )

}

export default PlanCourseModal;

const PCM = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 850;
    background-color: #fff;
    transition: 0.4s ease;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    &.on{
        bottom: 0;
    }

    &.off{
        bottom: -100%;
    }

    .Header1{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
    }
    .head_btn_right{
        display: none;
    }

    .main{
        position: absolute;
        top: 100px;
        left: 20px;
        right: 20px;
    }
    .main > h2{
        margin-bottom: 20px;
    }
    .list{
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .list > div{
        border-radius: 0 0 10px 10px;
    }
    .list > div > ul > li::before{
        display: inline-block;
        content: "";
        vertical-align: top;
        width: 13px;
        height: 13px;
        margin: 25px 10px 0 0;
        border-radius: 30px;
        background-color: #9621F1;
    }
    .list .acoTitle .acoTop .index{
        position: relative;
        z-index: 2;
    }
    .list .acoTitle .acoTop .img{
        display: block;
        position: absolute;
        width: 100%;
        height: 120px;
        border-radius: 10px;
        z-index: 1;
        object-fit: cover;
    }
    .list .acoTitle .acoTop .img.on{
        border-radius: 10px 10px 0 0;
    }
    .list .acoTitle .acoTop .img.off{
        transition-delay: 0.2s;
    }
    .list .acoTitle .acoTop .index > h2{
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
    }
    .list .acoTitle .acoTop .index > p{
        display: none;
    }
    .list .acoTitle .acoCourse{
        position: relative;
        z-index: 2;
        padding: 0 20px 20px;
        color: #fff;
    }
    .list .btn.active{
        display: block;
        width: 100%;
        border-radius: 0 0 10px 10px;
    }
`