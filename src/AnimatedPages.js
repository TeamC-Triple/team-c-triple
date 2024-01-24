
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";

const animatioins = {
    initial : { opacity: 0 },
    animate : { opacity: 1 },
    exit : { opacity: 0 }
}
const AnimatedPages = ({children})=> {
    const location= useLocation();
    return(
        <motion.div 
        key={location.pathname}
        variants={animatioins}
        initial="initial" 
        animate="animate" 
        exit="exit"
        transition={ { duration : 0.2 }}
        >
            {children}
        </motion.div>
    );
}
export default AnimatedPages;

