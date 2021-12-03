import React, { useMemo, useState } from 'react';
import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { useModalStyle, useSubmitBtnStyle } from '../assets/styles/index.styles';
import { AnimatePresence, motion } from 'framer-motion';
import { CreatePlace, PLACES_DEFAULT_VALUE } from '../types/places';
import { variants } from '../assets/utils';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { placesActionCreators } from '../state/actions-creators';
import { places, status } from '../services';

type PlacesFormPropsT = {
    open : boolean
    setOpen : (open : boolean) => void
}

export const PlacesForm = ({ open, setOpen } : PlacesFormPropsT)=> {
    const [ place, setPlace ] = useState<CreatePlace>(PLACES_DEFAULT_VALUE);
    const [ error, setError ] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { addPlace } = bindActionCreators(placesActionCreators, dispatch);
    const classes = useModalStyle();
    const buttonClasses = useSubmitBtnStyle();
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
        setError(false);
        setPlace({ ...place, [target.name] : target.value });
    };

    const handleSubmit = async(e : React.SyntheticEvent) => {
        e.preventDefault();
        const { floor, placeNumber } = place ;
        if(!error && floor && placeNumber){
            const response = await places.create({floor : Number(floor), placeNumber : Number(placeNumber)});
            if(response && response.status === status.CREATED ){
                addPlace(response.data);
            }
        }
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
                            onSubmit = { handleSubmit }  
                            onBlur = { handleClose } 
                            caption = 'Add a new place'
                            error = { error }
                            helperText = { helperText }
                        >
                            <Input
                                label = 'floor' 
                                name = 'floor' 
                                onChange = { handleChange } 
                                helperText = { helperText }
                                required
                            />
                            <Input
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
