import React, { useRef, useEffect }  from 'react';
import { useSelectStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { useCloseOnBlur } from '../hooks';
import { SelectFloor } from './SelectFloors';

type SelectProps = {
    open : boolean,
    setOpen : (open : boolean) => void,
    children : React.ReactNode
};

export const Select = ({ open, setOpen, children } : SelectProps) => {
    const classes = useSelectStyle();
    const handleClose = useCloseOnBlur(setOpen);
    const handlefocus = () => setOpen(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const icon = ref.current?.firstElementChild as HTMLButtonElement;        
        if(icon){
            if(open){
                icon.style.visibility = 'hidden';
                icon.disabled = true;
                return
            };
            icon.style.visibility = 'visible';
        }
    },[open]);

    return(
        <motion.div
        ref = { ref }
        layout  
        onFocus = { handlefocus }
        onBlur = { handleClose }
        tabIndex = { 0 }
        variants = { variants.select } 
        animate = 'animate' 
        custom = { open } 
        className = { classes.container }
        >
            { children }
           {open &&
                <>   
                    <SelectFloor />
                    <label className = { classes.caption }>Select a floor</label>
                </> 
            }   
        </motion.div>
    )
}