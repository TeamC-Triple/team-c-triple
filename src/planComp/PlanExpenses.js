import "./PlanExpenses.css"

const PlanExpenses = ({expenses, setExpenses, click, setClick, addRef, moneyRef}) => {
    const btnClick = () => {
        if(expenses > 0){
            moneyRef.current.style.display = 'block'
            setClick(false);
        } else {
            moneyRef.current.style.display = 'none'
            addRef.current.style.display = 'block'
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