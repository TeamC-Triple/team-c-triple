import { motion } from "framer-motion"

const animatioins = {
    initial : {opacity : 0, x: 100},
    animate : {opacity : 1, x: 0},
    exit : {opacity : 0, x: -100}
}

const AnimatedPages = ({children})=> {
    return(
        <motion.div 
        variants={animatioins} initial="initial" 
        animate="animate" 
        exit="exit"
        transition={ { duration : 1 }}
        >
            {children}
        </motion.div>
    );
}
export default AnimatedPages;