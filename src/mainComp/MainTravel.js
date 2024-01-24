
import AnimatedRight from "../AnimateRight.js";
import AnimatedPages from "../AnimatedPages.js";

import MTSection1 from "../homecomp/MTSection1.js";
import MTSection2 from "../homecomp/MTSection2.js";
import MTSection3 from "../homecomp/MTSection3.js";
import MTSection4 from "../homecomp/MTSection4.js";

const MainTravel = () => {
    return (
        <div id="MainTravel">
        <AnimatedPages>
            <MTSection1 />
            <MTSection2 />
            <MTSection3 />
            <MTSection4 />
        </AnimatedPages>
        </div>
    );
};

export default MainTravel;