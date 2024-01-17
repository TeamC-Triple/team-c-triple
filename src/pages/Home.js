import Header1 from "../common/Header1.js";
import H1Section1 from "../homecomp/H1Section1.js";
import H1Section2 from "../homecomp/H1Section2.js";
import H1Section3 from "../homecomp/H1Section3.js";

import HeaderIcon from "../common/HeaderIcon.js";
import Footer1 from "../common/Footer1.js";

const Home = () => {
    return (
        <div id="Home">
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
            <H1Section1 />
            <H1Section2 />
            <H1Section3 />
            <Footer1 />
        </div>
    );
};

export default Home;