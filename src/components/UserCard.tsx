import { useUserCardStyle } from '../assets/styles/index.styles';
import { Avatar } from './Avatar';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';

export const UserCard = () => {
    const classes = useUserCardStyle();
    const user = useSelector((store : ReducerRootStateType) => store.user);

    return(
        <div className = { classes.container }>
            <div className = { classes.card }>
                <div className = { classes.cardHeader }></div>
                <div className = { classes.cardContent }>
                    <Avatar />
                    <h2 className = { classes.userName }> 
                        { `${user?.firstName} ${ user?.lastName }` } 
                    </h2>
                </div>
            </div>
        </div>
    )
}