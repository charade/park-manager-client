import React, { useMemo, useState } from 'react';
import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { useSubmitBtnStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { CreatePlace, PLACES_DEFAULT_VALUE } from '../utils/dataTypes/places';
import { variants } from '../assets/utils';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { placesActionCreators } from '../state/actions-creators';
import { places, status } from '../services';
import { useNotification, useCloseOnBlur, useToggle } from '../hooks';
import { Snackbar } from './Snackbar';
import { Modal } from './Modal';

type PlacesFormPropsT = {
    open : boolean
    setOpen : (open : boolean) => void
}

export const PlacesForm = ({ open, setOpen} : PlacesFormPropsT)=> {
    const [ place, setPlace ] = useState<CreatePlace>(PLACES_DEFAULT_VALUE);
    const  error = useToggle();
    const dispatch = useDispatch();
    const { addPlace } = bindActionCreators(placesActionCreators, dispatch);
    const buttonClasses = useSubmitBtnStyle();
    const notification = useNotification();
    //handleClose on blur 
    const handleClose = useCloseOnBlur(setOpen);
    //helper text for input error
    const helperText = useMemo(() => `You should provide a number`, []);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e

        if(isNaN(Number(target.value))){
            //set error to true
            error.toggle();
            return;
        };
        //if bad entry was corrected allow to unmount helper
        error.isTrue && error.toggle()
        setPlace({ ...place, [target.name] : target.value });
    };

    const handleSubmit = async(e : React.SyntheticEvent) => {
        e.preventDefault();
        const floor = Number(place.floor);
        const placeNumber = Number(place.placeNumber);

        if(!error.isTrue && floor && placeNumber){
            const response = await places.create({floor, placeNumber}).catch(err => {
                const message = err.response.data.description;
                notification.set({message, severity : 'error'});
            });

            if(response && response.status === status.CREATED ){
                addPlace(response.data);
                notification.set({ message : 'Successfully created', severity : 'success' });
            };

            notification.setOpen(true);
        }
    };

    return(
        <Modal open = { open }>
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
                    error = { error.isTrue }
                    helperText = { helperText }
                >
                    <Input
                        id = 'floor-text-field'
                        label = 'floor' 
                        name = 'floor' 
                        onChange = { handleChange } 
                        helperText = { helperText }
                        required
                    />
                    <Input
                        id = 'place-number-text-field'
                        label = 'place number' 
                        name = 'placeNumber' 
                        onChange = { handleChange } 
                        required
                        helperText = { helperText }
                    />
                    <Button type = 'submit' label = 'Submit' className = { buttonClasses.button } />
                </Form>
            </motion.div>
            <Snackbar 
                open = { notification.open }
                setOpen = { notification.setOpen }
                message = { notification.value?.message }
                severity = { notification.value?.severity }
            />
        </Modal>
    )
}
