import { useState, useEffect } from 'react';
import { useLandingStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { Logo } from '../components/Logo';
import { variants } from '../assets/utils'


export const Landing = () => {
    const [ ready, setReady ] = useState<Boolean>(false);
    const classes = useLandingStyle();

    useEffect(() => {
        setTimeout(() => setReady(true), 2000);
    },[]);

    return(
        <motion.div 
            initial = { false }
            variants = { variants.landing }
            animate = { ready ? 'close' : 'open' }
            exit = 'close'
            className = { classes.root }
        >
            <Logo
                initial = 'close'
                variants = { variants.logo }
                animate = { ready ? 'close' : 'open' }
            />
        </motion.div>
    )
};