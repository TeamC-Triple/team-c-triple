import { useNavigate, useParams } from "react-router-dom";
import { SpotsDataContext } from "../App";
import { useState, useContext } from "react";
import styled from "styled-components";
import Header1 from "../common/Header1";
import { useEffect } from "react";

const SpotInfo = () => {
    
    const SpotsData = useContext(SpotsDataContext);
    const [data, setData] = useState(SpotsData);

    const [recoData, setRecoData] = useState();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (SpotsData.length > 0) {
            const thisData = SpotsData.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if (thisData) {
                setData(thisData);
            };
        };
    }, [id, SpotsData]);

    
    const recoSpotData = SpotsData.filter((it)=>
        it.city === data.city && it.spotName !== data.spotName
    );
    
    const shadowStyles = {
        display: 'flex',
        boxShadow: '0 1px 8px rgba(0,0,0,0.2)',
        padding: '10px 20px',
        margin: '0 0 20px 0',
        borderRadius: '10px',
        lineHeight: '30px'
    };

console.log(recoData);
    return(
        <SpotInfoBG>
            <Header1
                leftChild={
                    <p onClick={() => (navigate(-1))}>
                        뒤로가기
                    </p>
                }
            />
            <SpotBest10>
                <div className="spotTop">
                   <div>
                    <p className="spotTitle">{data.spotName}</p> 
                    <p className="spotCity">🚩 {data.city}</p> 
                    <p className="spotKey">{data.keyword}</p> 
                    </div>
                   <div></div>
                </div>
                <div className="spotPhoto"><img src={data.photo} /></div>
            </SpotBest10>
            <SpotReco>
                <div className="recoTitle">추천 여행지</div>
                    <div className="recoSpotWrap">
                        {recoSpotData.slice(0, 6).map((it)=> (
                            <div key={it.id}>
                                <div className="recoName" style={shadowStyles}>
                                    <p className="dots">관광지</p>
                                    <p>{it.spotName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </SpotReco>
        </SpotInfoBG>
    );
}

export default SpotInfo;

const SpotInfoBG = styled.div`

.Header1 .head_btn_left p{
    width: 24px;
    height: 24px;
    background-image: url('../assets/icon-arrow-left.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    text-indent: -9999px;
}

`

const SpotBest10 = styled.div`
    margin: 0 20px 50px 20px;
    padding-top: 80px;

    .spotTop{
        margin-bottom: 20px;
    }
    .spotTitle{
        margin-bottom: 20px;
        font-size : 18px;
        font-weight: 700;
    }
    .spotCity{
        margin-bottom: 10px;
        font-size : 15px;
        font-weight: 500;
    }
    .spotKey{
        font-size : 14px;
        font-weight: 400;
        color : #888;
    }
    .spotPhoto{
        height: 220px;
        border-radius: 10px;
        overflow: hidden;
    }
    .spotPhoto img{
        width : 100%;
        height: auto;
        object-fit: cover;
    }

`
const SpotReco = styled.div`
margin: 0 20px 50px 20px;
.recoTitle{
    margin-bottom: 24px;
    font-size : 18px;
    font-weight: 700;
}
.recoSpotWrap{
    width: 100%;
    font-size : 15px;
    font-weight: 500;
}
.dots{
    margin-top: 10px;
    margin-right: 10px;
    text-indent: -9999px;
    width: 12px;
    height: 12px;
    background-color: #368FFF;
    border-radius: 50%;
}


`