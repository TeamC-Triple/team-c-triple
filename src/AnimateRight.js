
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";

const animatioins = {
    initial : { x: 0 , opacity: 1 },
    animate : { x: 0, opacity: 1 },
    exit : { x: 300 , opacity: 0.2 }
}
const AnimatedRight = ({children})=> {
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
export default AnimatedRight;

