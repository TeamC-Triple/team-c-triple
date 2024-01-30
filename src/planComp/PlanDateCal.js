import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { ko } from 'date-fns/locale';

import { getStringDate } from "../utill/dateString.js";

import Button from '../common/Button.js';
import styled from 'styled-components';
import Header1 from '../common/Header1.js';
import HeaderIcon from '../common/HeaderIcon.js';

const PlanDateCal = ({
    isCalendar,
    setIsCalendar,
    travelDateRange,
    setTravelDateRange,
    startDate,
    setStartDate,
    lastDate,
    setLastDate,
    closeModalDateCal,
}) => {
    const [travelRange, setTravelRange] = useState([]);
    const [dateCal, setDateCal] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        },
    ]);
    
    const onRangeChange = (items) => {
        setDateCal([items.selection]);
        setStartDate([items.selection.startDate])
        setLastDate([items.selection.endDate])
        setTravelRange(getDateRange([items.selection.startDate], [items.selection.endDate]));
    };

    // 처음날짜부터 마지막날짜 사이를 구하는 변수
    const getDateRange = (date1, date2) => {
        const start = new Date(date1);
        const last = new Date(date2);
        const result = [];

        while(start <= last){
            result.push(start.toISOString().slice(0,10));
            start.setDate(start.getDate() + 1);
        }
        return result;
    }

    const handleSelectBtn = () => {
        setTravelDateRange(travelRange);
        closeModalDateCal();
    };

    return (
        <PlandateCal className={isCalendar ? 'planDateCalendar on' : 'planDateCalendar'}>
            <Header1 
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={() => {closeModalDateCal()}}
                />}
            />
            <div className='daterange'>
                <h3>언제 떠나시나요?</h3>
                <div className='calendar'>
                    <DateRange
                        onChange={onRangeChange}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={dateCal}
                        direction="vertical"
                        editableDateInputs={true}
                        locale={ko}
                        minDate={new Date()}
                        dateDisplayFormat='yyyy.MM.dd'
                    />
                </div>
                <div className='selecBtn'>
                    <Button 
                        type={'active'}
                        text={`
                            ${dateCal[0].startDate.toLocaleDateString()} ~ ${dateCal[0].endDate.toLocaleDateString()} 선택 완료
                        `}
                        onClick={handleSelectBtn}
                    />
                </div>
            </div>
        </PlandateCal>
    );
};

export default PlanDateCal;

const PlandateCal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: -100%;
    background-color: #fff;
    z-index: 850;
    transition: 0.4s ease;

    &.on{
        bottom: 0;
    }
    .Header1{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
    }
    .head_btn_left{
        width: 24px;
        height: 24px;
        text-indent: -99999px;
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_btn_left{
        background-image: url(/assets/icon-arrow-left.svg);
    }
    .daterange{
        position: relative;
        height: 100vh;
        margin: 0 20px;
        h3{
            padding-top: 80px;
        }
        .calendar{
            position: absolute;
            top: 120px;
            left: 0;
            right: 0;
            width: calc(100vw - 40px);
            height: calc(100vh - 210px);
            overflow-x: hidden;
            overflow-y: scroll;

            .rdrDateRangeWrapper{
                width: 100%;
            }
            .rdrDateDisplay input{
                font-size: 15px;
            }
            .rdrMonthAndYearPickers select{
                font-size: 15px;
                font-weight: 500;
                color: #666;
            }
            .rdrMonth{
                width: calc(100% - 20px);
            }
            .rdrDay{
                height: 3.5em;
                line-height: 3.5em;
            }
            .rdrDayNumber{
                font-size: 14px;
                font-weight: 400;
            }
            .rdrMonthName{
                font-size: 14px;
            }
        }
        
        .selecBtn{
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            margin: 0;
            .btn{
                width: 100%;
            }
        }
    }
`;