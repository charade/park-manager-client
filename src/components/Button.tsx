import { useButtonStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';

type ButtonPropsT = {
    label ?: string,
    className ?: string,
    icon ?: React.ReactNode,
    type ?: "submit",
    iconPosition ?: "before" | "after",
    onClick ?: (e : React.MouseEvent<HTMLButtonElement>) => void,
};

export const Button = ({
    label,
    className,
    icon,
    type,
    iconPosition,
    onClick,
} : ButtonPropsT) => {
    
    const classes = useButtonStyle();

    return(
        <motion.button 
        layout  
        className = { `${classes.button} ${ className}` } 
        type = { type } 
        onClick = { onClick }
        >
            { iconPosition === 'before' && icon }
            { label }
            { !label && icon }
            { iconPosition === 'after' && icon }
        </motion.button>
    )
}