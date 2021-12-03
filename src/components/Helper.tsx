import { useHelperStyle } from '../assets/styles/index.styles';
import { motion, AnimatePresence } from 'framer-motion';

type HelperProps = {
    message : string 
    when ?: boolean
};

export const Helper = ({ message, when } : HelperProps) => {
    const classes = useHelperStyle();

    return(
        <AnimatePresence>
            {when && 
                <motion.h4 
                    layout
                    animate = {{ opacity : 1 }}
                    exit = {{ opacity : 0 }}
                    className = { classes.message }
                > 
                    { message } 
                </motion.h4>}
        </AnimatePresence>
    )
}