import React, { useEffect, useRef } from 'react';
import { useSidebarStyle } from '../assets/styles/index.styles';
import { variants } from '../assets/utils';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReducerRootStateType } from '../state';
import { colleaguesActionCreators, sidebarActionCreators } from '../state/actions-creators';
import { Avatar } from './Avatar';
import { useMediaQuery } from '@mui/material';
import { device } from '../assets/utils/constants';

export const Sidebar = () => {
    const classes = useSidebarStyle();
    // const handleClose = useCloseOnBlur(setOpen);
    const dispatch = useDispatch();
    const { loadColleagues } = bindActionCreators(colleaguesActionCreators, dispatch);
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);
    const open = useSelector((store : ReducerRootStateType) => store.sidebar);
    const colleagues = useSelector((store : ReducerRootStateType) => store.colleagues);
    const ref = useRef<HTMLUListElement>(null);
    const isScreenMobile = !useMediaQuery(device.sm);

    useEffect(() => {
        if(open){
            ref.current?.focus()
        }
    }, [open]);
    
    useEffect(() => void loadColleagues(), [loadColleagues]);
    /**
     * explicitly set side bar open to false
     */
    const handleClose = (e: React.FocusEvent) =>{
        if(!e.currentTarget.contains(e.relatedTarget)){
            toggleSidebar(false)
        }
    }
    
    return(
        <motion.div 
        className = { classes.backdrop }
        animate = { isScreenMobile ? open ? 'open' : 'close' : 'open' }
        variants = { variants.sidebar }
        initial = { false }
        >
            <motion.ul 
            ref = { ref }
            tabIndex = { 0 }
            onBlur = { handleClose }
            variants = { variants.sidebarToolbar }
            animate = { isScreenMobile ? open ? 'open' : 'close' : 'open' }
            className = { classes.drawer }
            >
                { colleagues.map((user, i) => {
                    return(
                        <motion.li 
                        key = { `colleague-${user.id}-${i}` }
                        variants = { variants.sidebarItem } 
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
        </motion.div>
    )
};

