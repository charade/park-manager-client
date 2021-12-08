import React, { useState, useMemo  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavbarStyle } from '../assets/styles/index.styles';
import { Logo } from './Logo';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import ExploreIcon from '@mui/icons-material/Explore';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Select } from './Select';
import { motion } from 'framer-motion';
import { Finder } from './Finder';
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
    const [ finderAnchorEl, setFinderAnchorEl ] = useState<HTMLButtonElement | null>(null);
    const [ openSelect, setOpenSelect ] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);
    const navigate = useNavigate();
    const openFinder = useToggle();
    const classes = useNavbarStyle();
    const isScreenMobile = !useMediaQuery(device.sm);
    const isAdmin = useMemo(() => user?.role === userRole.ADMIN,[user]);

    const handleToggleSidebar = () => toggleSidebar(true);

    const handleOpenFinder = (e : React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        openFinder.toggle();
        setFinderAnchorEl(target)
    };
    const handleLogOut = () => navigate('/');

    return(
        <div className = { classes.root }>
            <motion.nav layout className = { classes.paper }>

                <div className = { classes.box }>
                    <Logo className = { classes.logo } />
                    <Select open = { openSelect } setOpen = { setOpenSelect }>
                        <Button className = {classes.navItem } icon = { <SearchIcon /> } />
                    </Select>
                </div>

                <div className = { classes.box }>
                    <Button 
                    className = {classes.navItem } 
                    icon = { <ExploreIcon /> } 
                    onClick = { handleOpenFinder } 
                    />
                    {isScreenMobile && isAdmin &&
                        <Button 
                        className = {classes.navItem } 
                        icon = { <GroupsIcon /> } 
                        onClick = { handleToggleSidebar } 
                        />
                    }
                </div>

                <div className = { classes.box }>
                <Button 
                layout = { false }
                className = {classes.navItem } 
                icon = { <PowerSettingsNewIcon /> } 
                onClick = { handleLogOut } 
                />
                </div>
            </motion.nav>
            <Finder 
                open = { openFinder.isTrue }
                setOpen = { openFinder.toggle }
                anchorEl = { finderAnchorEl }
            />
        </div>
    )
}