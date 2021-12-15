import { useButtonStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';

type ButtonPropsT = {
    label ?: string,
    className ?: string,
    icon ?: React.ReactNode,
    type ?: "submit",
    iconPosition ?: "before" | "after",
    onClick ?: (e : React.MouseEvent<HTMLButtonElement>) => void,
    layout ?:boolean
    custom ?: boolean
};

export const Button = ({layout = false, ...props } :ButtonPropsT) => {
    
    const classes = useButtonStyle();

    return(
        <motion.button 
        layout = { layout }
        className = { `${classes.button} ${ props.className}` } 
        type = { props.type } 
        onClick = { props.onClick }
        >
            { props.iconPosition === 'before' && props.icon }
            { props.label }
            { !props.label && !props.iconPosition && props.icon }
            { props.iconPosition === 'after' && props.icon }
        </motion.button>
    )
}