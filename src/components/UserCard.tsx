import { useUserCardStyle } from '../assets/styles/index.styles';
import { Avatar } from './Avatar';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { Button } from './Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UpdateUser } from './UpdateUser';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useToggle } from '../hooks';

export const UserCard = () => {
    const classes = useUserCardStyle();
    const user = useSelector((store : ReducerRootStateType) => store.user);
    const openUpdates= useToggle();

    const handleToggleOpen = () => openUpdates.toggle();

    return(
        <AnimateSharedLayout>
            <motion.div className = { classes.container }>
                <motion.div layout className = { classes.card }>
                    <motion.div layout className = { classes.cardHeader }></motion.div>
                    <motion.div layout className = { classes.cardContent }>
                        <Avatar
                        layout 
                        placeholder = { user?.firstName }
                        src = { user?.avatar }
                        alt = { `${user?.firstName}-${user?.lastName}` }
                        />
                        <motion.h2 layout className = { classes.userName }> 
                            { `${user?.firstName} ${ user?.lastName }` } 
                        </motion.h2>
                        <UpdateUser open = { openUpdates.isTrue }/>
                    </motion.div>
                    <Button 
                    layout 
                    className = { classes.btn }
                    icon = {<KeyboardArrowDownIcon className = { classes.btnIcon }/>} 
                    onClick = { handleToggleOpen }
                    />
                </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    )
}