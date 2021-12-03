import { useState } from 'react';
import { useNavbarStyle } from '../assets/styles/index.styles';
import { Logo } from './Logo';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import { SearchField } from './SearchField';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [ openSearchField, setOpenSearchField ] = useState<boolean>(false);
    const classes = useNavbarStyle();

    return(
        <motion.nav layout className = { classes.paper }>
            <Logo className = { classes.logo } />
            <SearchField open = { openSearchField } setOpen = { setOpenSearchField }>
                <Button className = {classes.navItem } icon = { <SearchIcon /> } />
            </SearchField>
            <Button className = {classes.navItem } icon = { <AppsIcon /> }/>
            <Button className = {classes.navItem } icon = { <GroupsIcon /> }/>
        </motion.nav>
    )
}