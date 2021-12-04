import { usePopperStyle } from '../assets/styles/index.styles';
import { useCloseOnBlur } from '../hooks';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../assets/utils';
import { useEffect, useRef } from 'react';

type PopupProps = {
    children ?: React.ReactNode,
    open : boolean,
    setOpen : (open : boolean) => void
};

export const Popper = ({ children, open, setOpen } : PopupProps) => {
    const classes = usePopperStyle();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => void ref.current?.focus(),[open]);

    const handleClose = useCloseOnBlur(setOpen);

    return(
        <AnimatePresence>
            {open &&
                <motion.div
                ref = { ref }
                className = { classes.paper }
                variants = { variants.popper }
                animate = 'open'
                exit = 'close'
                tabIndex = { -1 }
                onBlur = { handleClose }
                >
                    { children }
                </motion.div>
            }
        </AnimatePresence>
    )
}