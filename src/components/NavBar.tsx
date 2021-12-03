import { useNavbarStyle } from '../assets/styles/index.styles';
import { Logo } from './Logo';
import { Button } from './Button';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';

export const Navbar = () => {
    const classes = useNavbarStyle();

    return(
        <nav className = { classes.paper }>
            <Logo className = { classes.logo } />
            <Button className = {classes.navItem } icon = { <SearchIcon /> }/>
            <Button className = {classes.navItem } icon = { <AppsIcon /> }/>
            <Button className = {classes.navItem } icon = { <GroupsIcon /> }/>
        </nav>
    )
}