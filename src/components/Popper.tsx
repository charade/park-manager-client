import { usePopperStyle } from '../assets/styles/index.styles';
// import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Popover, PopoverOrigin } from '@mui/material';
import { PopoverPosition } from '@material-ui/core';

interface Transform{
    horizontal : "left" | "center" | "right" | number
    vertical : "top" | "center" | "bottom" | number
};
interface Classes{
    paper :string
    root : string
};
type PopupProps = {
    children ?: React.ReactNode,
    open : boolean,
    setOpen : (open : boolean) => void,
    anchorEl ?: Element | null,
    props ?: { origin?: PopoverOrigin, transform ?: Transform, position ?:PopoverPosition }
    classes ?: Classes
};

export const Popper = ({ children, open, setOpen, props, anchorEl, classes } : PopupProps) => {
    const styled = usePopperStyle();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(open){
            ref.current && ref.current.focus();
        }
    },[open]);

    return(
        <Popover
        open = { open }
        anchorEl = { anchorEl }
        anchorOrigin = { props?.origin}
        transformOrigin = { props?.transform }
        //if position defined set popover according to position instead anchorEl
        anchorReference = { props?.position && "anchorPosition" }
        anchorPosition = { props?.position }
        onClose = { () => setOpen(false) }
        transitionDuration = { .5 }
        classes = {{ 
            paper : classes?.paper , 
            root : `${styled.root} ${classes?.root}` 
        }}
        >
            { children }
        </Popover>
    )
}