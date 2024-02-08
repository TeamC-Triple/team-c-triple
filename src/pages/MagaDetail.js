import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { MagazineDataContext } from "../App";
import Header1 from "../common/Header1";
import styled from "styled-components";

const MagaDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const MagaList = useContext(MagazineDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (MagaList?.length > 0) {
            const targetTrip = MagaList?.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if (targetTrip) {
                setData(targetTrip);
            } else {
                alert('없는 여행기입니다.');
                navigate('/', { replace: true });
            };
        };
    }, [id, MagaList]);

    return(
        <MagaDeWrap>
            <Header1
                leftChild={
                    <p onClick={() => (navigate(-1))}>
                        뒤로가기
                    </p>
                }
                className="TravelLog_header"
            />
            <MagaPage>
                <div className="photo">
                    <img src={`/assets/${data.magaPhoto}.webp`}/>
                </div>
                <div className="info">
                    <div className="week">
                        {data.magaWeek}
                    </div>
                    <div className="title">
                        {data.magaTitle}{data.magaIcon}
                    </div>
                    <div className="ment">
                        {data.magaMent}
                    </div>
                    <div className="content">
                        {data.magaTxt}
                    </div>
                    <div className="writer">
                    - by {data.magaWriter}
                    </div>
                </div>
            </MagaPage>
        </MagaDeWrap>
    );
}

export default MagaDetail;

const MagaDeWrap = styled.div`
    .Header1{
        background-color: transparent;
        border: none;
    }
    .Header1 .hd_left{
        flex-grow: 1;
    }
    .head_btn_left{
        text-indent: -9999px;
    }
    .head_btn_left p{
        width: 24px;
        height: 24px;
        background-image: url(/assets/icon-cancel.svg);
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
        filter: invert(100%) sepia(15%) saturate(2%) hue-rotate(66deg) brightness(109%) contrast(101%);
    }
`
const MagaPage = styled.div`
    padding-bottom: 40px;
    .photo img{
        width: 100%;
        height: 40vh;
        overflow: hidden;
        object-fit: cover;
    }
    .info{
        padding: 40px 20px;
    }
    .title{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
    }
    .ment{
        margin-bottom: 20px;
        font-weight: 500;
    }
    .content{
        margin-bottom: 30px;
        line-height: 1.6em;
        color: #666;
    }
    .writer{
        color: #aaa;
    }
    .week{
        margin-bottom: 5px;
        font-weight: 500;
    }
`