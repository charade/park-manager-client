import { useEffect,useCallback } from 'react';
import { useSnackbarStyle } from '../assets/styles/index.styles';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../assets/utils';
import { Severity, SnackbarIcon } from './SnackbarIcon';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './Button';

export type SnackbarType = Severity & {
    message : string | undefined
}

type SnackbarProps = SnackbarType & {
    open : boolean,
    setOpen : (open : boolean) => void
};
export const Snackbar = ({ message, open, setOpen, severity } : SnackbarProps ) => {
    const classes = useSnackbarStyle();

    //auto hide
    useEffect(() => {
        const t = setTimeout(() => setOpen(false), 4000)
        return () => clearTimeout(t)
    },[setOpen, open]);

    const handleClose = useCallback(() => setOpen(false),[setOpen])

    return(
        <AnimatePresence>
            {open &&
                <motion.div  
                    variants = { variants.snackbar } 
                    className = { classes.snackbar }
                    animate = { open ? 'open' : 'close' }
                    initial = 'close'
                    exit = 'close'
                >
                    <SnackbarIcon 
                        severity = { severity } 
                        className = { classes.icon } 
                    />
                    { message }
                    <Button 
                        className = { classes.closeBtn } 
                        icon = { <CloseIcon /> } 
                        onClick = { handleClose }
                    />
                </motion.div>
            }
        </AnimatePresence>
    )
};
