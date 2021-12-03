import { useState } from 'react';
import { useUserCardStyle } from '../assets/styles/index.styles';
import { Avatar } from './Avatar';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { Button } from './Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const UserCard = () => {
    const classes = useUserCardStyle();
    const user = useSelector((store : ReducerRootStateType) => store.user);
    const [ openUpdates, setOpenUpdates ] = useState<boolean>(false);

    const handleToggleOpen = () => setOpenUpdates(!openUpdates);

    return(
        <div className = { classes.container }>
            <div className = { classes.card }>
                <div className = { classes.cardHeader }></div>
                <div className = { classes.cardContent }>
                    <Avatar />
                    <h2 className = { classes.userName }> 
                        { `${user?.firstName} ${ user?.lastName }` } 
                    </h2>
                </div>
                <Button 
                    className = { classes.btn }
                    label = 'update' 
                    icon = {<KeyboardArrowDownIcon className = { classes.btnIcon }/>} 
                    iconPosition = 'after'
                    onClick = { handleToggleOpen }
                />
            </div>
        </div>
    )
}