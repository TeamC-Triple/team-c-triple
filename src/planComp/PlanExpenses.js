import "./PlanExpenses.css"

const PlanExpenses = ({expenses, setExpenses, click, setClick, setAdd, setMoney}) => {
    const btnClick = () => {
        if(expenses > 0){
            setMoney(true);
            setClick(false);
        } else {
            setMoney(false);
            setAdd(true);
            setClick(false);
        }
    }

    return(
        <div className={click ? 'PlanExpenses on' : 'PlanExpenses off'}>
            <div className="PEBackground"></div>
            <div className="PEModal">
                <input type="number" placeholder="예상 여행 경비를 작성해주세요!" value={expenses || ''} onChange={(e)=>{setExpenses(e.target.value)}} />
                <button onClick={btnClick}>확인</button>
            </div>
        </div>
    )
}

export default PlanExpenses;