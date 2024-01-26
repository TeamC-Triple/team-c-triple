import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const CityLi = ({id, val, city, place, setCheckCity, checkCity}) => {
    const [check, setCheck] = useState(false);

    useEffect(() => {
    }, []); 

    const handleActiveCheck = () => {
        setCheck(true);
        setCheckCity(city);
    };
    const handleDeActiveCheck = () => {
        setCheck(false);
        setCheckCity('');
    };

    return (
        <CityListLi>
            <div className="li_left">
                <p className="city_photo"><img src={`/assets/city_${val}.jpg`} alt={val} /></p>
                <div className="city_title">
                    <p className="city_name">{city}</p>
                    <p className="city_place">{place}</p>
                </div>
            </div>
            <div className="li_right">
                {
                    !check
                    ? <Button type={'deActive'} text={'선택'} onClick={handleActiveCheck} />
                    : <Button type={'active'} text={'취소'} onClick={handleDeActiveCheck} />

                }
            </div>
        </CityListLi>
    );
};

export default CityLi;

const CityListLi = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;

    .li_left{
        display: flex;
        align-items: center;

        .city_photo{
            width: 40px;
            height: 40px;
            margin-right: 16px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .city_title{
            .city_name{
                padding-top: 2px;
                margin-bottom: 4px;
                font-weight: 600;
                line-height: 1em;
            }
            .city_place{
                font-size: 11px;
                line-height: 1em;
                color: #aaa;
            }
        }
    }
    .li_right .btn{
        padding: 7px 20px 8px;
        border-radius: 30px;
    }
`;