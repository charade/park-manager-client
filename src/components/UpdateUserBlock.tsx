import { useUpdateUserStyle } from '../assets/styles/index.styles';
import { AnimateSharedLayout } from 'framer-motion';
import { Input } from './Input';
import AddIcon from '@mui/icons-material/Add';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { User } from '../utils/dataTypes/user';

type UpdateUserBlocProps = {
    onChangeField : () =>  void
    label : string,
    name : string
};

export const UpdateUserBlock = ({onChangeField, label, name} : UpdateUserBlocProps) => {
    const classes = useUpdateUserStyle();
    const user = useSelector((store :ReducerRootStateType) => store.user);
    
    return(
        <AnimateSharedLayout>
            <div className = { classes.block }>
                <div className = { classes.box }>
                    <Button 
                    className ={ classes.btn }
                    label = { `Edit ${label }` } 
                    iconPosition = "after"
                    icon = { <AddIcon /> }
                    />
                    { user && (name in user) && 
                        <span className = { classes.reminder }>
                             {  
                                `${user[name as keyof User]!.slice(0, 10)} 
                                ${((user[name as keyof User]!.length > 10) ? '...' : '')}`  
                             } 
                        </span>
                    }
                </div>
                <Input underline onChange = { onChangeField } name = { name }  />
            </div>
        </AnimateSharedLayout>
    )
}