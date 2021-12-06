import { useEffect } from 'react';
import { useSidebarStyle } from '../assets/styles/index.styles';
import { variants } from '../assets/utils';
import { motion } from 'framer-motion';
import { useCloseOnBlur } from '../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReducerRootStateType } from '../state';
import { colleaguesActionCreators } from '../state/actions-creators';
import { Avatar } from './Avatar';

type DrawerProps = {
    open ?: boolean,
    setOpen ?: (open : boolean) => void
}

export const Sidebar = ({ open, setOpen } : DrawerProps) => {
    const classes = useSidebarStyle();
    // const handleClose = useCloseOnBlur(setOpen);
    const dispatch = useDispatch();
    const { loadColleagues } = bindActionCreators(colleaguesActionCreators, dispatch);
    const colleagues = useSelector((store : ReducerRootStateType) => store.colleagues);

    useEffect(() => void loadColleagues(), [loadColleagues]);

    return(
        <motion.ul 
        tabIndex = { 0 }
        // onBlur = { handleClose }
        variants = { variants.drawer }
        // animate = { open ? 'open' : 'close' }
        initial = { false }
        className = { classes.drawer }
        >
            { colleagues.map((user, i) => {
                return(
                    <motion.li 
                    key = { `colleague-${user.id}-${i}` }
                    variants = { variants.drawerItem } 
                    className = { classes.item }
                    >
                        <Avatar 
                        placeholder = { user.firstName }
                        classes = {{
                            root : classes.avatarRoot,
                            placeholder : classes.avatarPlaceholder
                        }} 
                        src = { user.avatar }
                        alt = { `${user.firstName}-${user.lastName}` }
                        />
                        
                        <h3 className = { classes.userName }>
                             { `${user.firstName} ${user.lastName}` } 
                        </h3>
                    </motion.li>
                )
            })}
        </motion.ul>
    )
};

