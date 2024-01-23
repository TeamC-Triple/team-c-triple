
import AnimatedPages from "../AnimatedPages.js";

import H1Section1 from "../homecomp/H1Section1.js";
import H1Section4 from "../homecomp/H1Section4.js";
import H1Section2 from "../homecomp/H1Section2.js";
import H1Section3 from "../homecomp/H1Section3.js";


const Home = () => {
    
    return (
        <AnimatedPages>
        <div id="Home">
            <H1Section1 />
            <H1Section2 />
            <H1Section3 />
            <H1Section4 />
        </div>
        </AnimatedPages>
    );
};

export default Home;