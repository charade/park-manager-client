import { useMainContainerStyle } from '../assets/styles/index.styles';
import { Navbar } from './NavBar';
import { useMediaQuery } from '@mui/material';
import { UserCard } from './UserCard';

export const MainContainer = () => {
    const classes = useMainContainerStyle();

    return(
        <div className = { classes.container }>
            <Navbar />
            <UserCard />
        </div>
    )
}