import { useMainStyle } from '../assets/styles/index.styles';
import { MainContainer } from '../components/MainContainer';
import { Sidebar } from '../components/Sidebar';
import { useMediaQuery } from '@material-ui/core';
import { useMemo } from 'react';
import { device } from '../assets/utils/constants';
import { UserCard } from '../components/UserCard';
import { Navbar } from '../components/NavBar';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { userRole } from '../utils/contants';
export const Main = () => {
    const classes = useMainStyle();
    const isScreenLarge = useMediaQuery(device.sm);
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const isAdmin = useMemo(() => user?.role === userRole.ADMIN, [user]);

    return(
        <div className = { classes.main }>
            <Navbar />
            { isScreenLarge && <UserCard /> }
            <MainContainer />
            { isAdmin && <Sidebar />}
        </div>
    )
}