import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useNotification } from "../hooks";
import { colleaguesActionCreators } from '../state/actions-creators';
import { motion } from 'framer-motion';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useDetailsStyle } from '../assets/styles/index.styles';
import { Popper } from './Popper';
import { Avatar } from './Avatar';
import { Button } from './Button';
import { variants } from '../assets/utils';
import { switchPermissions } from '../utils/functions';
import { users } from '../services';
import { Snackbar } from './Snackbar';
import { User } from '../utils/dataTypes/user';

type DetailsProps = {
    user : User | null,
    anchorEl ?: Element | null,
    open : boolean,
    setOpen : (open : boolean) => void
    userIndex ?: number
}

export const Details = ({ user, anchorEl, open, setOpen, userIndex} : DetailsProps) => {
    const classes = useDetailsStyle();
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
            <div className = { classes.container }>
                <div className = { classes.block }>
                    <Avatar 
                    src = { user?.avatar } 
                    placeholder = { user?.firstName } 
                    alt = {`${ user?.firstName } ${ user?.lastName }`}
                    classes = {{ 
                        root : classes.avatarRoot, 
                        placeholder : classes.avatarPlaceHolder 
                    }}
                    />
                    <div className = { classes.box }>
                        <h2 className = { classes.userName }>
                            {`${ user?.firstName } ${ user?.lastName }` }
                        </h2>
                        <span className = { classes.info }>{ user?.email }</span>
                        <motion.span 
                        variants = { variants.role } 
                        animate = "role"
                        custom = { role } 
                        className = { classes.info }
                        > 
                            { role } 
                        </motion.span>
                    </div>
                </div>
                <Button 
                onClick = { handleSwitchRole }
                className = { classes.editBtn } 
                label = {`Change permissions...` }
                iconPosition = 'before' 
                icon = { <ChangeCircleIcon /> }
                />
            </div>
            <Snackbar 
            message = { notification.value?.message }
            severity = { notification.value?.severity }
            open = { notification.open }
            setOpen = { notification.setOpen }
            />
        </Popper>
    )
}