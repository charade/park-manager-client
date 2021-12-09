import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { UpdateUserField } from './UpdateUserField';
import { UpdateUserTypes, UPDATE_USER_DEFAULT_VALUES } from '../utils/dataTypes/user';
import { UpdateUserFields } from '../utils/contants';
import { UpdateAvatarField } from './UpdateAvatarField';
import { users } from '../services';
import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { usersActionCreators } from '../state/actions-creators';
import { bindActionCreators } from 'redux';
import { useNotification } from '../hooks';
import { Snackbar } from './Snackbar';

type UpdateUserProps = { open : boolean };

export const UpdateUser = ({open} : UpdateUserProps) => {
    const [ data, setData ] = useState<UpdateUserTypes>(UPDATE_USER_DEFAULT_VALUES);
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(usersActionCreators, dispatch);
    const notification = useNotification();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => { 
        const target =  e.target as HTMLInputElement;
        const name = target.name;
        if(name === "avatar"){
            setData({...data, avatar : target.files![0]});
            return;
        }
        setData({...data, [name] : target.value});
    };

    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault();
        //user can only submit with at least one field filled
        if(Object.values(data).some(value => value)){
            //filter empty fields
            const filteredKeys = Object.keys(data).filter(key => data[key as keyof UpdateUserTypes]);
            const formData = new FormData();
            filteredKeys.forEach(key => {
                formData.append(key, data[key as keyof UpdateUserTypes])
            });
            users.updateUser(formData).then(response => {
                setUser(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                notification.set({message : 'Successfully updated', severity: 'success'})

            }).catch(err => {
                const message = err.response.data.description;
                notification.set({message , severity: 'error'})
            });
            notification.setOpen(true);
        }
    };

    return(
        <AnimatePresence>
            {open &&
                <form onSubmit = { handleSubmit } encType = 'multipart/form-data'>
                    { UpdateUserFields.map((field, i) => {
                        return(
                            <UpdateUserField
                            key = { `update-${field}-field-${i}` } 
                            onChangeField = { handleChange }
                            label = { field.label }
                            name = { field.name }
                            />
                        )
                    })}
                    <UpdateAvatarField onChange = { handleChange }/>
                    <Button type = 'submit'/>
                </form>
            }
            <Snackbar 
            open = { notification.open }
            setOpen = { notification.setOpen }
            message = { notification.value?.message }
            severity = { notification.value?.severity }
            />
        </AnimatePresence>
    )
}