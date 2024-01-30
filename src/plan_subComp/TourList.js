import styled from "styled-components";

const TourList = ({id, title, city,period, photo}) => {
    return(
        <List>
            <p className="photo"><img src={`${photo}`} /></p>
            <div className="title">
                <p className="city">{city}</p>
                <p className="period">{period}</p>
            </div>
        </List>
    )
}

export default TourList;

const List = styled.div`
    margin-right: 20px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 10px;

    .photo img{
        width: 90%;
        height: 25vw;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    .title{
        width: 90%;
        padding: 10px 0;
        border-radius: 0 0 10px 10px;
        background-color: #EEEEEE;
    }
    .city{
        margin-left: 14px;
        font-size: 15px;
        font-weight: 700;
        color: #121212;
    }
    .period{
        margin-left: 14px;
        font-size: 12px;
        font-weight: 500;
        color: #AAAAAA;
    }
`