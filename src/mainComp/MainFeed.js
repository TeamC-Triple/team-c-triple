
import AnimatedPages from "../AnimatedPages.js";

import MFSection1 from "../homecomp/MFSection1.js";
import MFSection2 from "../homecomp/MFSection2.js";
import MFSection3 from "../homecomp/MFSection3.js";

const MainFeed = () => {
    return (
        <AnimatedPages>
            <div id="MainFeed">
                <MFSection1 />
                <MFSection2 />
                <MFSection3 />
            </div>
        </AnimatedPages>
    );
};

export default MainFeed;