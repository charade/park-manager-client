import { useSearchFieldStyle } from '../assets/styles/index.styles';
import { Input } from './Input';
import { motion, Variants } from 'framer-motion';

type SearchFieldProps = {
    open : boolean,
    setOpen : (open : boolean) => void,
    children : React.ReactNode
};

const variants : Variants = {
    animate : open => ({
        width : open ? '100%' : '4.8rem',
        transition : {
            ease : "linear",
            duration : .1
        }
    })
}

export const SearchField = ({ open, setOpen, children } : SearchFieldProps) => {
    const classes = useSearchFieldStyle();

    const handleOpen = () => setOpen(true);
    //prevent losing focus on children focus
    const handleClose = (e : React.FocusEvent) => {
        if (!e.currentTarget.contains(e.relatedTarget)){
            setOpen(false);
        }
    };

    return(
        <motion.div
            layout = 'position' 
            onFocus = { handleOpen }
            onBlur = { handleClose }
            tabIndex = { 0 }
            variants = { variants } 
            animate = 'animate' 
            custom = { open } 
            className = { classes.container }
        >
            { children }
            {open &&
                <Input
                    inputStyle = {{ color : 'rgba(0, 0, 0, .8)' }} 
                    name = 'search' 
                    label ='search a parking' 
                    labelStyle = {{color : 'rgba(0, 0, 0, .8)', fontSize : '1.3rem'}}
                    onChange = {() => null}
                />
            }
             
        </motion.div>
    )
}