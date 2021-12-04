import { useModalStyle } from '../assets/styles/index.styles';
import { AnimatePresence, motion } from 'framer-motion';

type ModalProps = {
    children : React.ReactNode
    open : boolean
}
export const Modal = ({ open, children } : ModalProps) => {
    const classes = useModalStyle();

    return(
        <AnimatePresence>
            {open &&
                <motion.div 
                    animate = {{ opacity : 1 }}
                    exit = {{ opacity : 0 }}
                    className = { classes.backdrop } 
                >
                    { children }
                </motion.div>
            }
        </AnimatePresence>
    )
}