import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import PlanEdit from "../plan_subComp/PlanEdit";
import { PlanDataContext } from "../App";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PlanList = useContext(PlanDataContext);

    const [planTotalData, setPlanTotalData] = useState(PlanList);


    return (
        <div className="Edit">
            {planTotalData && 
            <PlanEdit isEdit={true} planTotalData={planTotalData} />}
        </div>
    );
};

export default Edit;