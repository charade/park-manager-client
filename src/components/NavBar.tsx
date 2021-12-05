import { useState } from 'react';
import { useNavbarStyle } from '../assets/styles/index.styles';
import { Logo } from './Logo';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import ExploreIcon from '@mui/icons-material/Explore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Select } from './Select';
import { motion } from 'framer-motion';
import { Popper } from './Popper';
import { useToggle } from '../hooks';

export const Navbar = () => {
    const [ openSelect, setOpenSelect ] = useState<boolean>(false);
    const classes = useNavbarStyle();
    const openPopper = useToggle();

    return(
        <div className = { classes.root }>
            <motion.nav layout className = { classes.paper }>
                <Logo className = { classes.logo } />

                <Select open = { openSelect } setOpen = { setOpenSelect }>
                    <Button 
                    className = {classes.navItem } 
                    icon = { openSelect ? <ArrowDropDownIcon/> : <SearchIcon /> } 
                    />
                </Select>

                <Button 
                className = {classes.navItem } 
                icon = { <ExploreIcon /> } 
                onClick = {openPopper.toggle } 
                />
                <Button className = {classes.navItem } icon = { <GroupsIcon /> }/>
                <Popper open = { openPopper.isTrue }setOpen = { openPopper.toggle }/>
            </motion.nav>
        </div>
    )
}