
import { useLocation, useNavigate } from "react-router";
import Edit from "./Edit";
import PlanEdit from "../plan_subComp/PlanEdit";


const NewPlan = () => {
    return(
        <div className="NewPlan">
            <PlanEdit />
        </div>
    ); 
}

export default NewPlan;

