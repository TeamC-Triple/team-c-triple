import Header1 from "../common/Header1";
import MainTravel from "../mainComp/MainTravel";
import Home from "../mainComp/Home";
import MainFeed from "../mainComp/MainFeed";
import Footer1 from "../common/Footer1";
import HeaderIcon from "../common/HeaderIcon.js";
import BottomNavi from "../common/BottomNavi.js";

const Main = () => {
    return (
        <div id="Main">
            <Header1
                headTxt={'김이박님'}
                leftChild={
                    <p>
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