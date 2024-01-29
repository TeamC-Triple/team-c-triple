import styled from "styled-components";

const PlanDays = ({day, idx}) => {
    return (
        <Plandays>
            <div className="pdy_top">
                <h3>{`DAY ${idx+1} (${day})`}</h3>
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
            font-size: 16px;
            font-weight: 600;
            color: #368FFF;
        }
        .pdy_pay{
            font-size: 12px;
            color: #666;
        }
    }
`;