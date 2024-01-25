import { useContext } from "react";
import styled from "styled-components";

import CityLi from "../plan_subComp/CityLi.js";
import Button from "../common/Button.js";
import { CityDataContext } from "../App.js";


const PlanCity = ({ search }) => {
    const cityData = useContext(CityDataContext);
    return (
        <Plancity>
            <CityList>
                <div className="cl_top">
                    <h4>지역 선택</h4>
                </div>
                <div className="cl_list">
                    <ul>
                        {
                            cityData.filter((it) => {
                                if (search === "") {
                                    return it;
                                } else if (it.city.toLowerCase().includes(search.toLowerCase()) || it.place.toLowerCase().includes(search.toLowerCase())) {
                                    return it;
                                }
                            }).map((item) => (
                                <CityLi key={item.id} {...item} />
                            ))
                        }
                    </ul>
                </div>
                <div className="cl_btn">
                    <Button 
                        type={'deActive'}
                        text={'최소 1개 도시 선택'}
                    />
                </div>
            </CityList>
        </Plancity>
    );
};

export default PlanCity;

const Plancity = styled.div``;
const CityList = styled.div`
    padding-top: 110px;
    padding-bottom: 90px;
    .cl_top{
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        z-index: 110;
        padding: 3px 20px 0;
        background-color: #eee;
        h4{
            line-height: 37px;
        }
    }
    .cl_btn{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background-color: #fff;
        z-index: 100;

        .btn{
            width: 100%;
        }
    }
`;