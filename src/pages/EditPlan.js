import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PlanDataContext } from "../App";
import Plan from "./Plan";

const EditPlan = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PlanList = useContext(PlanDataContext);

    const [planTotalData, setPlanTotalData] = useState(PlanList);


    return (
        <div className="Edit">
            {planTotalData && 
            <Plan isEdit={true} planTotalData={planTotalData} />}
        </div>
    );
};

export default EditPlan;