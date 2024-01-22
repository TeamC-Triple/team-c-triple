
import HeaderIcon from "../common/HeaderIcon.js";
import MFSection2 from "../homecomp/MFSection2.js";
import Footer1 from "../common/Footer1.js";
import Header1 from "../common/Header1.js";
import MFSection1 from "../homecomp/MFSection1.js";

const MainFeed = () => {
    return (
        <div id="MainFeed">
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
            <MFSection1 />
            <MFSection2 />
            <Footer1 />
        </div>
    );
};

export default MainFeed;