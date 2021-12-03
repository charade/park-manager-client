import { useMainContainerStyle } from '../assets/styles/index.styles';
import { Navbar } from './NavBar';
import { useMediaQuery } from '@mui/material';
import { UserCard } from './UserCard';
import { PlacesTable } from './PlacesTable';
import { Divider } from './Divider';
import { Button } from './Button';
import AddIcon from '@mui/icons-material/Add';
import { PlacesForm } from './PlacesForm';
import { useState } from 'react';

export const MainContainer = () => {
    const [ openPlaceForm, setOpenPlaceForm ] = useState<boolean>(false);
    const classes = useMainContainerStyle();

    const handleOpenPlaceForm = () => setOpenPlaceForm(true);
        
    return(
        <div className = { classes.container }>
            <Navbar />
            <UserCard />
            <Divider label = 'places' className = { classes.divider }/>
            {/* should appear if user is admin */}
            <Button 
                className = { classes.btn }
                icon = { <AddIcon /> } 
                label = 'add' 
                iconPosition = 'after' 
                onClick = { handleOpenPlaceForm }
            />
            <PlacesForm open = { openPlaceForm } setOpen = { setOpenPlaceForm } />
            <PlacesTable />
        </div>
    )
}