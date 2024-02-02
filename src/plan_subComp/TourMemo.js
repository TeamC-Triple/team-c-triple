import styled from "styled-components";

const TourMemo = ({id, memo}) => {
    return(
        <Memo>
            <div className="memoDot">memo</div>
            <div className="memoContents">{memo}</div>
        </Memo>
    );
};

export default TourMemo;

const Memo = styled.div`
    display : flex;
    margin: 0 0 24px 18px;
    align-items: center;
    line-height: 20px;
        
    .memoDot{
        width: 16px;
        height: 16px;
        margin-right: 22px;
        border-radius: 50%;
        text-indent: -9999px;
        text-align: center;
        line-height: 30px;
        background-color: #368FFF;
    }
`