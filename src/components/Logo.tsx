import { useLogoStyle } from '../assets/styles/index.styles';
import ParkingImg from '../assets/images/parking.jpeg';
import { motion, Variants } from 'framer-motion';

type LogoProps = {
    variants ?: Variants
    animate ?: string
    initial ?:string
    className ?: string
    exit ?: string
}

export const Logo = ({ variants, animate, initial, className, exit } : LogoProps) => {
    const classes = useLogoStyle();

    return(
        <motion.img 
        className = { className || classes.img  }
        variants = { variants }
        initial = { initial }
        animate = { animate}
        exit = { exit }
        src = { ParkingImg } 
        alt = 'parking'
        />
    )
}