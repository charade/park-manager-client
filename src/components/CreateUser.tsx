import React, { useState, useMemo } from 'react';
import { Form } from './Form';
import { Input } from './Input';
import { Button } from './Button';
import { Modal } from './Modal';
import { Snackbar } from './Snackbar';
import { SignDataTypes, CREATE_USER_DEFAULT_VALUES } from '../utils/dataTypes/user';
import { useCloseOnBlur, useNotification } from '../hooks';
import { variants } from '../assets/utils';
import { motion } from 'framer-motion';
import {useCreateUserStyle } from '../assets/styles/index.styles';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { users } from '../services';

type CreateUserProps = {
    open: boolean,
    setOpen: (open : boolean) => void
    anchorEl: Element | null
};

export const CreateUser = (props: CreateUserProps) => {
    const handleClose = useCloseOnBlur(props.setOpen);
    const user = useSelector((store : ReducerRootStateType) => store.user);
    const [newAccount, setNewAccount] = useState<SignDataTypes>(CREATE_USER_DEFAULT_VALUES);
    const classes = useCreateUserStyle();
    const notification = useNotification();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const name = target.name;
        setNewAccount({...newAccount, [name] : target.value});
    };
    const handleSubmit = async(e : React.SyntheticEvent) => {
        e.preventDefault();
        console.log(user, newAccount)
        await users.createNewAdmin(newAccount).then(response => {
            notification.set({message : 'Succesfully created', severity :'success'});
        }).catch(err => {
            const message = err.response.data.description;
            notification.set({message, severity: 'error'});
        });
        notification.setOpen(true);
    }

    return(
        <Modal open = { props.open }>
            <motion.div 
            tabIndex = { 0 }
            onBlur = { handleClose }
            variants = { variants.createNewUser } 
            initial = 'close'
            animate = 'open' 
            exit = 'close'
            >
                <Form onSubmit = { handleSubmit } caption= 'new account'>
                    <Input underline required label = 'fist name' name = 'firstName' onChange = { handleChange } id = ''/>
                    <Input underline required label = 'last name' name = 'lastName' onChange = { handleChange } id = ''/>
                    <Input underline required label = 'email' name = 'email' onChange = { handleChange } id = ''/>
                    <Input underline required label = 'password' name = 'password' onChange = { handleChange } id = ''/>
                    <Button label = 'submit' className = { classes.submitBtn } />
                </Form>
            </motion.div>
            <Snackbar 
                open = { notification.open }
                setOpen = { notification.setOpen }
                severity = { notification.value?.severity }
                message = { notification.value?.message }
            />
        </Modal>
    )
}