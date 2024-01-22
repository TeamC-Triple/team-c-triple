import styled from "styled-components";

const TravelogItem = ({id, title, writer, profileImg, travelImg, date, ment,city, truncate})=> {
    
    return(
        <TL_Item>
            <TL_Info>
                <TL_profile><img src={`/assets/travelogPhoto${profileImg}`} /></TL_profile>
                <TL_postInfo>
                    <TL_title>{title}</TL_title>
                    <TL_writer>{writer}님의 일정<City>{city}</City></TL_writer>
                </TL_postInfo>
            </TL_Info>

            <Hotphoto>
                <TL_photo>
                    <TL_mainImg><img src={`/assets/travelogPhoto${travelImg[1]}`} alt="여행사진" /></TL_mainImg>
                    <TL_smallImg>
                        {travelImg.slice(2, 4).map((it)=>(
                            <TL_Img key={it}><img src={`/assets/travelogPhoto${it}`} /></TL_Img>
                        ))}
                    </TL_smallImg>
                </TL_photo>
            <TL_ment>{truncate(ment, 60)}</TL_ment>
            </Hotphoto>
        </TL_Item>
    );
}

export default TravelogItem;

const TL_Item = styled.li`
    width: 100%;
    margin-bottom: 30px;
`
const City = styled.span`
color: #999;
font-size: 12px;
`
const Hotphoto = styled.div`
display: flex;
`

const TL_Info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 14px;
`
const TL_profile = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 6px;
    overflow: hidden;
    
    img{
        width: 100%;
        height: auto;
    }
    `
const TL_postInfo = styled.div`
    font-size: 14px;
    font-weight: 600;
`
const TL_title = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const TL_writer= styled.div`
    color: #999;
    font-size: 12px;
`
const TL_photo= styled.div`
    display: flex;
    height: 120px;
    margin-right: 10px;
    border-radius: 10px;
    overflow: hidden;
    width: 50%;
`
const TL_mainImg= styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border: 1px solid #fff;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const TL_smallImg= styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
`
const TL_Img= styled.p`

    box-sizing: border-box;
    width: 100%;
    height: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const TL_ment= styled.div`
    margin: 0;
    width: 50%;
    font-size : 14px;
}
`

