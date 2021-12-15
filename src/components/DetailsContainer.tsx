import { Avatar } from './Avatar';
import { variants } from '../assets/utils';
import { motion } from 'framer-motion';
import { useDetailsStyle } from '../assets/styles/index.styles';
import { User } from '../utils/dataTypes/user';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Button } from './Button';

type DetailsProps = { 
    user : User | null, 
    role :string 
    action : () => void
};

export const DetailsContainer = ({ user, role, action } : DetailsProps) => {
    const classes = useDetailsStyle();

    return(
        <div className = { classes.container }>
            <div className = { classes.block }>
                <Avatar 
                src = { user?.avatar ? `data:image/png;base64,${user.avatar}` : '' } 
                placeholder = { user?.firstName } 
                alt = {`${ user?.firstName } ${ user?.lastName }`}
                classes = {{ 
                    root : classes.avatarRoot, 
                    placeholder : classes.avatarPlaceHolder 
                }}
                />
                <div className = { classes.box }>
                    <h2 className = { classes.userName }>
                        {`${ user?.firstName } ${ user?.lastName }` }
                    </h2>
                    <span className = { classes.info }>{ user?.email }</span>
                    <motion.span 
                    variants = { variants.role } 
                    animate = "role"
                    custom = { role } 
                    className = { classes.info }
                    > 
                        { role } 
                    </motion.span>
                </div>
            </div>
            <Button 
            onClick = { action }
            className = { classes.editBtn } 
            label = {`Change permissions...` }
            iconPosition = 'before' 
            icon = { <ChangeCircleIcon /> }
            />
        </div>
    )
}