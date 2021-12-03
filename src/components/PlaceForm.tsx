import React, { useMemo, useState } from 'react';
import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { useModalStyle, useSubmitBtnStyle } from '../assets/styles/index.styles';
import { AnimatePresence, motion } from 'framer-motion';
import { Places, PLACES_DEFAULT_VALUE } from '../types/places';
import { variants } from '../assets/utils';

type PlaceFormPropsT = {
    open : boolean
    setOpen : (open : boolean) => void
}

export const PlaceForm = ({ open, setOpen } : PlaceFormPropsT)=> {
    const classes = useModalStyle();
    const buttonClasses = useSubmitBtnStyle();
    const [ place, setPlace ] = useState<Places>(PLACES_DEFAULT_VALUE);
    const [ error, setError ] = useState<boolean>(false);
    //helper text for input error
    const helperText = useMemo(() => `You should provide a number`, []);

    const handleClose = (e : React.FocusEvent) => {
        if(!e.currentTarget.contains(e.relatedTarget))
            setOpen(false);
    };
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if(isNaN(Number(target.value))){
            setError(true);
            return;
        };
        setError(false)
        setPlace({ ...place, [target.name] : target.value });
    };

    return(
        <AnimatePresence>
            {open &&
                <motion.div 
                    animate = {{ opacity : 1 }}
                    exit = {{ opacity : 0 }}
                    className = { classes.backdrop } 
                >
                    <motion.div 
                        variants = { variants.placeForm }
                        animate = 'open'
                        exit = 'close'
                        initial = 'close'
                    >
                        <Form 
                            onSubmit = { () => null }  
                            onBlur = { handleClose } 
                            caption = 'Add a new place'
                            error = { error }
                            helperText = { helperText }
                        >
                            <Input
                                value = { place.floor } 
                                label = 'floor' 
                                name = 'floor' 
                                onChange = { handleChange } 
                                helperText = { helperText }
                                required
                            />
                            <Input
                                value = { place.placeNumber } 
                                label = 'place number' 
                                name = 'placeNumber' 
                                onChange = { handleChange } 
                                required
                                helperText = { helperText }
                            />
                            <Button type = 'submit' label = 'Submit' className = { buttonClasses.button } />
                        </Form>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
