import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { useModalStyle, useSubmitBtnStyle } from '../assets/styles/index.styles';
import { AnimatePresence, motion } from 'framer-motion';

type PlaceFormPropsT = {
    open : boolean
    setOpen : (open : boolean) => void
}
export const PlaceForm = ({ open, setOpen } : PlaceFormPropsT)=> {
    const classes = useModalStyle();
    const buttonClasses = useSubmitBtnStyle();
    const handleClose = (e : React.FocusEvent) => {
        if(!e.currentTarget.contains(e.relatedTarget))
            setOpen(false);
    }

    return(
        <AnimatePresence>
            {open &&
                <motion.div 
                    animate = {{ opacity : 1 }}
                    exit = {{ opacity : 0 }}
                    className = { classes.backdrop } 
                >
                    <Form onSubmit = { () => null }  onBlur = { handleClose } caption = 'Add a new place'>
                        <Input label = 'place number' name = 'number' onChange = {() => null} required/>
                        <Input label = 'place number' name = 'number' onChange = {() => null} required/>
                        <Input label = 'place number' name = 'number' onChange = {() => null} required/>
                        <Button type = 'submit' label = 'Submit' className = { buttonClasses.button } />
                    </Form>
                </motion.div>
            }
        </AnimatePresence>
    )
}
