import { useState, useMemo } from 'react';
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
    const [ openSelect, setOpenSelect ] = useState<boolean>(false);
    const classes = useNavbarStyle();
    const openPopper = useToggle();
    const dispatch = useDispatch();
    const isScreenMobile = !useMediaQuery(device.sm);
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const isAdmin = useMemo(() => user?.role === userRole.ADMIN,[user]);

    console.log(user)
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);

    const handleToggleSidebar = () => toggleSidebar();

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
                onClick = {openPopper.toggle } 
                />

                {isScreenMobile && isAdmin &&
                <Button 
                className = {classes.navItem } 
                icon = { <GroupsIcon /> } 
                onClick = { handleToggleSidebar } 
                />
                }
                <Popper open = { openPopper.isTrue }setOpen = { openPopper.toggle }/>
            </motion.nav>
        </div>
    )
}