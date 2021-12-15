import { useUpdateUserStyle } from '../assets/styles/index.styles';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { Input } from './Input';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { User } from '../utils/dataTypes/user';
import { useToggle } from '../hooks';
import React from 'react';

type UpdateUserBlocProps = {
    onChangeField : (e: React.ChangeEvent<HTMLInputElement>) =>  void
    label : string,
    name : string
};

export const UpdateUserField = ({onChangeField, label, name} : UpdateUserBlocProps) => {
    const classes = useUpdateUserStyle();
    const user = useSelector((store :ReducerRootStateType) => store.user);
    const openField = useToggle();

    return(
        <AnimateSharedLayout>
            <motion.div layout className = { classes.field }>
                <motion.div layout className = { classes.box }>
                    <motion.label
                    layout 
                    className ={ classes.fieldOpener } 
                    onClick = { openField.toggle } 
                    role = 'button'
                    >
                        Edit {label }
                        { openField.isTrue ? <RemoveIcon/> : <AddIcon /> }
                    </motion.label>
                    
                    { user && (name in user) && 
                        <motion.span layout className = { classes.overview }>
                            {  
                               `${user[name as keyof User]!.slice(0, 5)} 
                               ${((user[name as keyof User]!.length > 5) ? '...' : '')}`  
                            } 
                        </motion.span>
                    }
                </motion.div>
                { openField.isTrue && 
                    <Input 
                    layout 
                    underline 
                    onChange = { onChangeField } 
                    name = { name } 
                    inputStyle = {{ color: 'rgba(0, 0, 0, .7)' }} 
                    />
                }
            </motion.div>
        </AnimateSharedLayout>
    )
}