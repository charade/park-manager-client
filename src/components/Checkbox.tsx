import { useMemo } from 'react';
import { useCheckboxStyle } from '../assets/styles/index.styles';
import CheckIcon from '@mui/icons-material/Check';
import { useNotification } from '../hooks';
import { places } from '../services';
import { Snackbar } from './Snackbar';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { placesActionCreators } from '../state/actions-creators';
import { useToggle } from '../hooks';
import { CircularProgress } from '@mui/material';

/**
 * Allow users to reserve a place
 */

type CheckProps = {
    id : string
};

export const Checkbox = ({ id }: CheckProps) => {
    const classes = useCheckboxStyle();
    const notification = useNotification();
    const loading = useToggle();
    const dispatch = useDispatch();
    const { removePlace } = bindActionCreators(placesActionCreators, dispatch);
    
    const success = useMemo(() => notification.value?.severity === 'success' || false,[notification]);

    const handleChange = async() => {
        places.reserve({id})
        .then(() => {
            //set loading to true
            loading.toggle();
            notification.set({severity : 'success', message : 'Succesfully reserved'});
            notification.setOpen(true);
            //remove place from available ones
            setTimeout(() => removePlace(id), 2000);
        })
        .catch(err => {
            const message = err.response.description;
            notification.set({ message, severity : 'error' });
            notification.setOpen(true);
        });
    };

    return(
        <div className = { classes.container }>
            <label className = { classes.box }>
                {/* checked on request success */}
                { success && <CheckIcon  className = { classes.ico }/> }
                <input 
                    onChange = { handleChange }
                    type = 'checkbox' 
                    className = { classes.inputCheck }
                />
            </label>
            {/* fires before remove place form available ones */}
            { loading.isTrue && <CircularProgress size = '2rem' className = { classes.progress }/>}

            <Snackbar 
                message = { notification.value?.message }
                severity = { notification.value?.severity }
                open = { notification.open }
                setOpen = { notification.setOpen }
            />
        </div>
    )
};


