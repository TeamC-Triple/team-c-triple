import styled from "styled-components"
import Accodion from "./Accordion"

const content1 = [
    <li key={1}>트리플 매거진</li>,
    <li key={2}>추천 여행코스</li>,
    <li key={3}>추천 여행지</li>,
    <li key={4}>축제 / 행사</li>
]
const content2 = [
    <li key={5}>나의 여행피드</li>,
    <li key={6}>베스트 여행기</li>,
    <li key={7}>인기 급상승 여행기</li>
]
const content3 = [
    <li key={8}>내 여행</li>,
    <li key={9}>지난 여행</li>,
    <li key={10}>나의 여행기</li>
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