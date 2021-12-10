import { useState, useMemo } from 'react';
import { bindActionCreators }  from 'redux';
import { useDispatch } from 'react-redux';
import { sidebarActionCreators } from '../state/actions-creators';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import {  useToolbarStyle, useLeftSidebarStyle } from '../assets/styles/index.styles';
import { Button } from './Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useMediaQuery } from '@mui/material';
import { device } from '../assets/utils/constants';
import GroupsIcon from '@mui/icons-material/Groups';
import ExploreIcon from '@mui/icons-material/Explore';
import { userRole } from '../utils/contants';
import { Finder } from './Finder';
import { useToggle } from '../hooks';

export const LeftSidebar = () => {
    const [ finderAnchorEl, setFinderAnchorEl ] = useState<HTMLButtonElement | null>(null);
    const openFinder = useToggle();
    const styledToolbar = useToolbarStyle();
    const classes = useLeftSidebarStyle();
    const isScreenMobile = !useMediaQuery(device.sm);
    const dispatch = useDispatch();
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const { toggleSidebar } = bindActionCreators(sidebarActionCreators, dispatch);

    const isAdmin = useMemo(() => user?.role === userRole.ADMIN,[user]);

    const handleToggleSidebar = () => toggleSidebar(true);

    const handleOpenFinder = (e : React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        openFinder.toggle();
        setFinderAnchorEl(target)
    };

    return(
        <>
            <div className = { `${styledToolbar.container} ${ classes.drawer }` }>
                <Button 
                className = { classes.item }
                icon = { <PersonAddIcon className = { classes.icon }/> }
                label = {isScreenMobile ? '' : 'New account'}
                iconPosition = 'before'
                /> 
                {isScreenMobile && isAdmin &&
                    <Button 
                    className = {classes.item } 
                    icon = { <GroupsIcon /> } 
                    onClick = { handleToggleSidebar } 
                    />
                }
                <Button 
                className = {classes.item } 
                icon = { <ExploreIcon  className = { classes.icon } /> } 
                iconPosition = 'before'
                onClick = { handleOpenFinder } 
                label = {isScreenMobile ? '' : 'My car'}
                />
            </div>
            <Finder 
                open = { openFinder.isTrue }
                setOpen = { openFinder.toggle }
                anchorEl = { finderAnchorEl }
            />
        </>
    )
}