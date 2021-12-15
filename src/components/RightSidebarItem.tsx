import { motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { Avatar } from './Avatar';
import { User } from '../utils/dataTypes/user';
import { useRightSidebarItemStyle } from '../assets/styles/index.styles';
import { useState } from 'react';
// 'rgb(157, 203, 234)'
type SideBarItemProps = {
    user : User
    onClick : (e : React.MouseEvent<HTMLLIElement>) => void
};
export const RightSidebarItem = ({ user, onClick } : SideBarItemProps) => {
    const classes = useRightSidebarItemStyle();
    const [ isHovered, setHovered ] = useState<boolean>(false);

    return(
        <motion.li 
        onMouseEnter = {() => setHovered(true) }
        onMouseLeave = {() => setHovered(false)}
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
            <span className = { classes.userName }>
                { `${user.firstName} ${user.lastName}` }
                <motion.i 
                animate = {isHovered ? 'focus' : 'blur'}
                variants = { variants.underLine } 
                className = { classes.underline }>
                </motion.i> 
            </span>
        </motion.li>
    )
}