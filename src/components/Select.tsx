import React, { useRef, useEffect, useState }  from 'react';
import { useSelectStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { SelectFloor } from './SelectFloors';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import { useCloseOnBlur } from '../hooks';

export const Select = () => {
    const [ open, setOpen] = useState<boolean>(false);
    const classes = useSelectStyle();
    const ref = useRef<HTMLDivElement>(null);
    const handleClose = useCloseOnBlur(setOpen);

    const handlefocus = () => setOpen(true);

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
            <Button className = {classes.btn } icon = { <SearchIcon className = { classes.icon }/> } />
            {open &&
            <>   
                <label className = { classes.caption }>Select a floor</label>
                <SelectFloor />
            </> 
            }   
        </motion.div>
    )
}