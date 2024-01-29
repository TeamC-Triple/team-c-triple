import styled from "styled-components";

const PlanDays = ({day, idx}) => {
    return (
        <Plandays>
            <div className="pdy_top">
                <h3>DAY {idx+1} <span>({day})</span></h3>
                <p className="pdy_pay">예상 경비 : </p>
            </div>
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
`;