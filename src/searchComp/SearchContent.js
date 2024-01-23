import { useContext, useState } from "react";
import styled from "styled-components";

const SearchContent = () => {
    const [searchResult, setSearchResult] = useState([]);

    return(
        <SearchContents>
            <ContentBox>
                <h3>인기 검색어</h3>
            </ContentBox>
            <ContentBox>
                <h3>최근 검색어</h3>
            </ContentBox>
            <ContentBox>
                <h3></h3>
            </ContentBox>
        </SearchContents>
    );
};

export default SearchContent;

const SearchContents = styled.div`
    padding: 60px 0;
`;
const ContentBox = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eee;
    h3{
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
    }
`;