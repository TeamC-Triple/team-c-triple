import styled from "styled-components";

const PlanDays = ({day, idx}) => {
    const [isEmpty, setIsEmpty]= useState(true);
    return (
        <Plandays>
            <div className="pdy_top">
                <h3>DAY {idx+1} <span>({day})</span></h3>
                <p className="pdy_pay">예상 경비 : </p>
            </div>
            {isEmpty ? <Empty>일정이 비어있습니다.</Empty> 
                    :  <TourSpots />}
            <Day>
                <Button type={'gray_border'} text='장소추가' />
                <Button type={'gray_border'} text='메모추가' />
            </Day>
        </Plandays>
    );
};

export default PlanDays;

const Plandays = styled.div`
    margin-right: 20px;
    margin-bottom: 30px;
    .pdy_top{
        margin-bottom: 15px;

        h3{
            margin-bottom: 6px;
            font-size: 17px;
            font-weight: 700;

            span{
                font-size: 14px;
                color: #333;
                font-weight: 600;
            }
        }
        .pdy_pay{
            font-size: 12px;
            color: #666;
        }
    }
`
const Day = styled.div`
    display : flex;
    justify-content: space-between;
    .Button{
        width: 49%;
    }
`
const Empty = styled.div`
    padding : 30px 0;
    text-align:center;
 `