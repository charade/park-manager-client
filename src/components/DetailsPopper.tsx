import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useNotification } from "../hooks";
import { colleaguesActionCreators } from '../state/actions-creators';

import { Popper } from './Popper';
import { switchPermissions } from '../utils/functions';
import { users } from '../services';
import { Snackbar } from './Snackbar';
import { User } from '../utils/dataTypes/user';
import { DetailsContainer } from './DetailsContainer';

type DetailsProps = {
    user : User | null,
    anchorEl ?: Element | null,
    open : boolean,
    setOpen : (open : boolean) => void
    userIndex ?: number
}

export const DetailsPopper = ({ user, anchorEl, open, setOpen, userIndex} : DetailsProps) => {
    const [role, setRole] = useState<string>('');
    const notification = useNotification();
    const dispatch = useDispatch();
    const { changePermissions } = bindActionCreators(colleaguesActionCreators, dispatch);
    
    useEffect(() => { user && setRole(user.role) },[user]);

    const handleSwitchRole = async() => {
        const newRole = switchPermissions(role);
        const id = user?.id as string;

        await users.updatePermissions({id, role : newRole}).catch(error => {
            const message = error.response.data.description;
            notification.set({message, severity: 'error'});
            notification.setOpen(true);
        });
        const index = userIndex as number;
        changePermissions({index, role : newRole});
        setRole(newRole);
    }

    return(
        <Popper
        open = { open }
        setOpen = { setOpen }
        anchorEl = { anchorEl }
        props = {{
            origin : { horizontal : 'left', vertical : 'top'},
            transform : { horizontal : 'right', vertical :'top' } 
        }}
        >
            <DetailsContainer user = { user } role = {role} action = { handleSwitchRole } />
            <Snackbar 
            message = { notification.value?.message }
            severity = { notification.value?.severity }
            open = { notification.open }
            setOpen = { notification.setOpen }
            />
        </Popper>
    )
}