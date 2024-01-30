import styled from "styled-components"
import Accodion from "./Accordion"

const content1 = [
    {id : 0, data : '트리플 매거진'},
    {id : 1, data : '추천 여행코스'},
    {id : 2, data : '추천 여행지'},
    {id : 3, data : '축제 / 행사'}
]
const content2 = [
    {id : 0, data : '나의 여행피드'},
    {id : 1, data : '베스트 여행기'},
    {id : 2, data : '인기 급상승 여행기'}
]
const content3 = [
    {id : 0, data : '내 여행'},
    {id : 1, data : '지난 여행'},
    {id : 2, data : '나의 여행기'}
]

export const AccodionItem = () => {
    return(
        <AItem>
            <Accodion title='여행지 정보 / 매거진' content={content1} />
            <Accodion title='모두의 여행기' content={content2} />
            <Accodion title='마이 페이지' content={content3} />
            <Accodion title='여행자 클럽' />
            <Accodion title='오프라인 가이드' />
        </AItem>
    )
}

const AItem = styled.div`
    border-top: 10px solid #E8E8E8;
    border-bottom: 10px solid #E8E8E8;
`