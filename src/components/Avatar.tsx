import { useAvarStyle } from '../assets/styles/index.styles';
import { ReducerRootStateType } from '../state';
import { useSelector } from 'react-redux';

export const Avatar = () => {
    const classes = useAvarStyle();
    const user = useSelector((store : ReducerRootStateType) => store.user);

    return(
        <div className = { classes.box }>
            { user?.avatar ? <img src = { user.avatar } alt = { `${user.firstName}` }/> :
                <h3 className = { classes.placehoder }> { user?.firstName.charAt(0) } </h3>
            }
        </div>
    )
}