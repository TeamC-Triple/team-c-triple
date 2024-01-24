import { useRef, useState } from "react"
import styled from "styled-components"

const Accodion = ({content, title}) => {
    const [isCollapse, setIsCollapse] = useState(false);
    
    const handleClick = () => {
        {
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 0) {
                parentRef.current.style.height = "0";
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight}px`
            }
            setIsCollapse(!isCollapse);
        }
    }

    const parentRef = useRef(null);
    const childRef = useRef(null);
    
    const parentRefHeight = parentRef.current?.style.height ?? '0';

    return(
        <div className="list">
            <div className="acoTitle" onClick={handleClick}>
                <H2>{title}</H2>
                <p className={parentRefHeight === '0px' || parentRefHeight === '' ? 'acoArrow off' : 'acoArrow on'}></p>
            </div>
            <Div ref={parentRef}>
                <ul ref={childRef}>
                    {content}
                </ul>
            </Div>
        </div>
    )
}

export default Accodion;


const Div = styled.div`
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease;
    border-bottom: 1px solid #E8E8E8;
    font-size: 12px;
    font-weight: 500;
    line-height: 59px;
    text-align: left;
    background-color: #E8E8E8;
`

const H2 = styled.h2`
    padding: 0 20px 0;
    background-color: #fff;
    line-height: 60px;
    cursor: pointer;
`