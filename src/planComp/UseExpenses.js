import { useState } from "react";
import styled from "styled-components";

const UseExpenses = ({ useExpenses, setUseExpenses, click, setClick, setAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const btnClick = () => {
        setAdd(true);
        setClick(false);
        if (inputValue !== '') {
            const updatedUseExpenses = parseFloat(inputValue);
            setUseExpenses(updatedUseExpenses);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Expenses className={click ? 'on' : ''}>
            <div className="PEBackground"></div>
            <div className="PEModal">
                <input
                    type="number"
                    placeholder="예상 사용 경비를 작성해주세요!"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={btnClick}>확인</button>
            </div>
        </Expenses>
    );
};

export default UseExpenses;

const Expenses = styled.div`
    display: none;

    &.on{
        display: block;
    }
    .PEBackground{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 700;
    }
    .PEModal{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 70%;
        padding: 30px;
        transform: translate(-50%, -50%);
        text-align: center;
        background-color: #fff;
        z-index: 800;
    }
    .PEModal input{
        width: 80%;
        height: 30px;
        padding: 0 10px;
        margin: 12px 0 0 10px;
        border-radius: 30px;
        text-align: center;
    }
    .PEModal button{
        display: block;
        padding: 7px 20px 8px;
        margin: 20px auto 0;
        border-radius: 30px;
        background-color: #eeeeee;
        font-size: 12px;
        font-weight: 600;
        color: #121212;
    }
`