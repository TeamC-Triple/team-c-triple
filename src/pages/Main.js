import Header1 from "../common/Header1";
import MainTravel from "../mainComp/MainTravel";
import Home from "../mainComp/Home";
import MainFeed from "../mainComp/MainFeed";
import Footer1 from "../common/Footer1";
import HeaderIcon from "../common/HeaderIcon.js";
import BottomNavi from "../common/BottomNavi.js";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div id="Main">
            <Header1
                headTxt={'김이박님'}
                onClickHeadTxt={()=>(navigate('/mypage'))}
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img />
                    </p>
                }
                rightChild1={
                    <HeaderIcon 
                        text={'일정짜기'} 
                    />
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}   
                    />
                }
            />
            <MainTravel />
            <Home />
            <MainFeed />
            <Footer1 />
            <BottomNavi />
        </div>
    );
};

export default Main;