import { useMainContainerStyle } from '../assets/styles/index.styles';
import { useMediaQuery } from '@mui/material';
import { UserCard } from './UserCard';
import { PlacesTable } from './PlacesTable';
import { Divider } from './Divider';
import { Button } from './Button';
import AddIcon from '@mui/icons-material/Add';
import { PlacesForm } from './PlacesForm';
import { useToggle } from '../hooks';
import { device } from '../assets/utils/constants';


export const MainContainer = () => {
    const openPlaceForm = useToggle();
    const classes = useMainContainerStyle();
    const isScreenMobile = !useMediaQuery(device.sm);
    

    return(
        <div className = { classes.container }>
            {isScreenMobile && <UserCard />}

            <Divider label = 'places' className = { classes.divider }/>
            {/* should appear if user is admin */}
            <Button 
            className = { classes.btn }
            icon = { <AddIcon /> } 
            label = 'add' 
            iconPosition = 'after' 
            onClick = { openPlaceForm.toggle }
            />

            <PlacesForm open = { openPlaceForm.isTrue } setOpen = { openPlaceForm.toggle } />
            <PlacesTable />
        </div>
    )
}