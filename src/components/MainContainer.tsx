import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { placesActionCreators } from '../state/actions-creators';
import { useToggle } from '../hooks';
import { device } from '../assets/utils/constants';
import { ReducerRootStateType } from '../state'; 
import { userRole } from '../utils/contants';
import { useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReplayIcon from '@mui/icons-material/Replay';
import { useMainContainerStyle } from '../assets/styles/index.styles';
import { UserCard } from './UserCard';
import { PlacesTable } from './PlacesTable';
import { Divider } from './Divider';
import { Button } from './Button';
import { PlacesForm } from './PlacesForm';
import { Chart } from './Chart';

export const MainContainer = () => {
    const dispatch= useDispatch();
    const { loadPlaces } = bindActionCreators(placesActionCreators, dispatch);
    const openPlaceForm = useToggle();
    const classes = useMainContainerStyle();
    const isScreenMobile = !useMediaQuery(device.sm);
    const user = useSelector((store :ReducerRootStateType) => store.user);
    const isAdmin = useMemo(() => user?.role === userRole.ADMIN, [user]);

    return(
        <div  className = { classes.container }>
            {isScreenMobile && <UserCard />}
            {!isScreenMobile && <Chart />}
            <Divider  label = 'Available places' className = { classes.divider }/>
            {/* only admin users can add a place */}
            {isAdmin && 
            <>
                <Button 
                className = { classes.btn }
                icon = { <ReplayIcon /> } 
                onClick = { loadPlaces }
                label = 'all' 
                iconPosition = 'after' 
                />
                <Button 
                className = { classes.btn }
                icon = { <AddIcon /> } 
                label = 'add' 
                iconPosition = 'after' 
                onClick = { openPlaceForm.toggle }
                />
            </>
            }
            <PlacesTable/>

            <PlacesForm open = { openPlaceForm.isTrue } setOpen = { openPlaceForm.toggle } />
        </div>
    )
}