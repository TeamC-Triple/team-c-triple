import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PlanDataContext } from "../App";
import Plan from "./Plan";

const EditPlan = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const planList = useContext(PlanDataContext);
    const [planOriginData, setPlanOriginData] = useState([]);

    useEffect(() => {
        if(planList.length >= 1){
            const targetPlan = planList.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if(targetPlan) {
                setPlanOriginData(targetPlan);
            } else {
                alert('일정이 존재하지 않습니다.');
                navigate('/mypage');
            }
        }
    }, [id, planList]);


    return (
        <div className="Edit">
            {planOriginData && 
            <Plan isEdit={true} planOriginData={planOriginData} />}
        </div>
    );
};

export default EditPlan;