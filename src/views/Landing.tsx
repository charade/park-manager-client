import { useState, useEffect } from 'react';
import { useLandingStyle } from '../assets/styles/index.styles';
import { motion, Variants } from 'framer-motion';
import { Logo } from '../components/Logo';

//page animation
const landingVariants : Variants = {
    open : {
        width : '100%',
        opacity :1
    },
    close : {
        width : '0',
        opacity : 0,
        transition : {
            delay : .38
        }
    }
};
//logo animation
const logoVariants: Variants = {
    open : {
        y : 0,
        opacity : 1,
        transition : {
            type : 'spring',
        }
    },
    close : {
        opacity : 0,
        y : '-15rem',
    }
}

export const Landing = () => {
    const [ ready, setReady ] = useState<Boolean>(false);
    const classes = useLandingStyle();

    useEffect(() => {
        setTimeout(() => setReady(true), 2000);
    },[]);

    return(
        <motion.div 
            initial = { false }
            variants = { landingVariants }
            animate = { ready ? 'close' : 'open' }
            exit = 'close'
            className = { classes.root }
        >
            <Logo
                initial = 'close'
                variants = { logoVariants }
                animate = { ready ? 'close' : 'open' }
            />
        </motion.div>
    )
};