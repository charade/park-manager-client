import { useState } from 'react';
import { useUpdateUserStyle } from '../assets/styles/index.styles';
import { AnimatePresence } from 'framer-motion';
import { UpdateUserBlock } from './UpdateUserBlock';
import { UpdateUserTypes, UPDATE_USER_DEFAULT_VALUES } from '../utils/dataTypes/user';
import { UpdateUserFields } from '../utils/contants';

type UpdateUserProps = {
    open : boolean
};

export const UpdateUser = ({open} : UpdateUserProps) => {
    const classes = useUpdateUserStyle();
    const [ data, setData ] = useState<UpdateUserTypes>(UPDATE_USER_DEFAULT_VALUES);

    const handleChange = () => null;

    return(
        <AnimatePresence>
            {open &&
                <div>
                    { UpdateUserFields.map((field) => {
                        return(
                            <UpdateUserBlock 
                            onChangeField = { handleChange }
                            label = { field.label }
                            name = { field.name }
                            />
                        )
                    })}
                    <input type ="file" onChangeCapture = { handleChange } alt = 'avatar' />
                </div>
            }
        </AnimatePresence>
    )
}