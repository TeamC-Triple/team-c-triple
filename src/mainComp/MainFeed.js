
import AnimatedRight from "../AnimateRight.js";
import AnimatedPages from "../AnimatedPages.js";

import MFSection1 from "../homecomp/MFSection1.js";
import MFSection2 from "../homecomp/MFSection2.js";
import MFSection3 from "../homecomp/MFSection3.js";

const MainFeed = () => {
    return (
        <div id="MainFeed">
        <AnimatedPages>
                <MFSection1 />
                <MFSection2 />
                <MFSection3 />
        </AnimatedPages>
        </div>
    );
};

export default MainFeed;