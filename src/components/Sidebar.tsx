import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReducerRootStateType } from '../state';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import { useSidebarStyle } from '../assets/styles/index.styles';
import { variants } from '../assets/utils';
import { sidebarActionCreators } from '../state/actions-creators';
import { DetailsPopper } from './DetailsPopper';
import { device } from '../assets/utils/constants';
import { User } from '../utils/dataTypes/user';
import { SidebarItem } from './SidebarItem';
import { DefaultMessage } from './DefaultMessage';

export const Sidebar = () => {
    const [ user, setUser ] = useState<User | null>(null);
    //used for upadeting user permissions
    const [ userIndex, setUserIndex ] = useState<number | undefined>(undefined);
    const [ detailsAnchorEl, setDetailsAnchorEl ] = useState<HTMLLIElement | null>(null);
    // const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const classes = useSidebarStyle();
    const dispatch = useDispatch();
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);
    const open = useSelector((store : ReducerRootStateType) => store.sidebar);
    const colleagues = useSelector((store : ReducerRootStateType) => store.colleagues);
    const ref = useRef<HTMLDivElement>(null);
    const isScreenMobile = !useMediaQuery(device.sm);
    
    //side bar close on blur so we need to fucus it first
    useEffect(() => {
        if(open){
            ref.current?.focus();
        }
    }, [open]);
    
    const handleClose = (e: React.FocusEvent) =>{
        if(!e.currentTarget.contains(e.relatedTarget)){
            toggleSidebar(false)
        }
    };
    const handleOpenDetails = (user : User, index : number) => {
        return (e : React.MouseEvent<HTMLDivElement>) =>{
            const target = e.target as HTMLLIElement;
            setUser(user);
            //selected user index in stored colleagues array
            setUserIndex(index)
            setDetailsAnchorEl(target);
            setOpenDetails(true);
        } 
    };

    return(
        <motion.div 
        className = { classes.backdrop }
        animate = { isScreenMobile ? (open ? 'open' : 'close') : 'open' }
        variants = { variants.sidebar }
        initial = { false }
        >
            <motion.div 
            ref = { ref }
            tabIndex = { 0 }
            onBlur = { handleClose }
            variants = { variants.sidebarToolbar }
            animate = { isScreenMobile ? (open ? 'open' : 'close') : 'open' }
            className = { classes.drawer }
            >
                <DefaultMessage when = { !colleagues.length } message = "Your collaborators will appear here"/>
                
                {colleagues && colleagues.map((user, i) => {
                    return(
                        <SidebarItem 
                        user = { user } 
                        onClick = { handleOpenDetails(user, i) } 
                        key = { `colleague-${user.id}-${i}`}
                        />
                    )
                })}
            </motion.div>
            <DetailsPopper 
            open = { openDetails}
            setOpen = { setOpenDetails}
            user = { user }
            userIndex = { userIndex }
            anchorEl = { detailsAnchorEl }
            />
        </motion.div>
    )
};

