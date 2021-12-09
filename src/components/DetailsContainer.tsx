import { Avatar } from './Avatar';
import { variants } from '../assets/utils';
import { motion } from 'framer-motion';
import { useDetailsStyle } from '../assets/styles/index.styles';
import { User } from '../utils/dataTypes/user';

type DetailsProps = { 
    user : User | null, 
    role :string 
    children : React.ReactNode
}

export const DetailsContainer = ({ user, role, children } : DetailsProps) => {
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
               { children }
            </div>
    )
}