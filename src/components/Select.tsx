import { useSelectStyle } from '../assets/styles/index.styles';
import { Input } from './Input';
import { motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { useCloseOnBlur } from '../hooks';

type SelectProps = {
    open : boolean,
    setOpen : (open : boolean) => void,
    children : React.ReactNode
};

export const Select = ({ open, setOpen, children } : SelectProps) => {
    const classes = useSelectStyle();

    const handleClose = useCloseOnBlur(setOpen);

    const handlefocus = () => setOpen(true);
    
    return(
        <motion.div
        layout  
        onFocus = { handlefocus }
        onBlur = { handleClose }
        tabIndex = { 0 }
        variants = { variants.select } 
        animate = 'animate' 
        custom = { open } 
        className = { classes.container }
        >
            {open &&
                <Input
                inputStyle = {{ color : 'rgba(0, 0, 0, .8)', border : 'none' }} 
                name = 'search' 
                label ='floor' 
                labelStyle = {{color : 'rgba(0, 0, 0, .8)', fontSize : '1.3rem'}}
                onChange = {() => null}
                underline = { false }
                />
            }
             
            { children }
        </motion.div>
    )
}