import styled from "styled-components";

const SelectedMemo = ({id, date, memo}) => {
    return(
        <SelectedMemoWrap>
            <div>
                {memo}
            </div>
        </SelectedMemoWrap>
    )
};

export default SelectedMemo;

const SelectedMemoWrap = styled.div`
    padding: 10px;
    >div::before{
        content:'';
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #368FFF;
        border-radius: 50px;
        margin-left: 10px;
        margin-right: 25px;
    }
    >div{
        font-size: 14px;
    }
`