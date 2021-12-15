import { useNavigate } from 'react-router-dom';
import { useNavbarStyle } from '../assets/styles/index.styles';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Select } from './Select';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const navigate = useNavigate();
    const classes = useNavbarStyle();
    
    const handleLogOut = () => navigate('/');

    return(
        <div className = { classes.root }>
            <motion.nav layout className = { classes.paper }>
                <h1 className = { classes.companyName } >{ user?.companyName }</h1>
                       
                <Select  />

                <div className = { classes.toolbar }>
                    <Button
                    className = { classes.navItem } 
                    layout = { false }
                    onClick = { handleLogOut } 
                    label=  'logout'
                    icon = { <PowerSettingsNewIcon className = { classes.icon }  /> }
                    iconPosition = "after"
                    />
                </div>
            </motion.nav>

            
        </div>
    )
}