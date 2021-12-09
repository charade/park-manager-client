import { motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { Avatar } from './Avatar';
import { User } from '../utils/dataTypes/user';
import { useSidebarItemStyle } from '../assets/styles/index.styles';

type SideBarItemProps = {
    user : User
    onClick : (e : React.MouseEvent<HTMLLIElement>) => void
};
export const SidebarItem = ({ user, onClick } : SideBarItemProps) => {
    const classes = useSidebarItemStyle();

    return(
        <motion.li 
        variants = { variants.sidebarItem } 
        className = { classes.box }
        onClick = { onClick }
        >
            <Avatar 
            placeholder = { user.firstName }
            src = { user.avatar ? `data:image/png;base64,${user.avatar}` : '' }
            alt = { `${user.firstName}-${user.lastName}` }
            classes = {{
                root : classes.avatarRoot,
                placeholder : classes.avatarPlaceholder
            }} 
            />
            <h3 className = { classes.userName }>
                { `${user.firstName} ${user.lastName}` } 
            </h3>
        </motion.li>
    )
}