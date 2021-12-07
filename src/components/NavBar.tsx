import React, { useState, useMemo  } from 'react';
import { useNavbarStyle } from '../assets/styles/index.styles';
import { Logo } from './Logo';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import ExploreIcon from '@mui/icons-material/Explore';
import { Select } from './Select';
import { motion } from 'framer-motion';
import { Popper } from './Popper';
import { useToggle } from '../hooks';
import { bindActionCreators }  from 'redux';
import { useDispatch } from 'react-redux';
import { sidebarActionCreators } from '../state/actions-creators';
import { useMediaQuery } from '@mui/material';
import { device } from '../assets/utils/constants';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { userRole } from '../utils/contants';

export const Navbar = () => {
    const [ popperAnchorEl, setPopperAnchorEl ] = useState<HTMLButtonElement | null>(null);
    const [ openSelect, setOpenSelect ] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);
    const openPopper = useToggle();
    const classes = useNavbarStyle();
    const isScreenMobile = !useMediaQuery(device.sm);
    const isAdmin = useMemo(() => user?.role === userRole.ADMIN,[user]);

    const handleToggleSidebar = () => toggleSidebar(true);

    const handleOpenPopper = (e : React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        openPopper.toggle();
        setPopperAnchorEl(target)
    };

    return(
        <div className = { classes.root }>
            <motion.nav layout className = { classes.paper }>
                <Logo className = { classes.logo } />

                <Select open = { openSelect } setOpen = { setOpenSelect }>
                    <Button className = {classes.navItem } icon = { <SearchIcon /> } />
                </Select>

                <Button 
                className = {classes.navItem } 
                icon = { <ExploreIcon /> } 
                onClick = { handleOpenPopper } 
                />

                {isScreenMobile && isAdmin &&
                <Button 
                className = {classes.navItem } 
                icon = { <GroupsIcon /> } 
                onClick = { handleToggleSidebar } 
                />
                }
                <Popper 
                anchorEl = { popperAnchorEl }
                open = { openPopper.isTrue }
                setOpen = { openPopper.toggle }
                props = {{
                    origin : { vertical : 'bottom', horizontal :'right' },
                    transform : { vertical :'top', horizontal :'right' }
                }}
                />
            </motion.nav>
        </div>
    )
}