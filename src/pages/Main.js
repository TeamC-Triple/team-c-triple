import Header1 from "../common/Header1.js";
import MainTravel from "../mainComp/MainTravel.js";
import Home from "../mainComp/Home.js";
import MainFeed from "../mainComp/MainFeed.js";
import Footer1 from "../common/Footer1.js";
import HeaderIcon from "../common/HeaderIcon.js";

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
        </div>
    );
};

export default Main;