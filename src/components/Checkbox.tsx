import { useCheckboxStyle } from '../assets/styles/index.styles';
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useToggle } from '../hooks';
/**
 * Allow users to reserve a place
 */


export const Checkbox = () => {
    const classes = useCheckboxStyle();
    const [ clicked, click ] = useToggle();

    console.log(clicked, click)

    return(
        <div className = { classes.container }>
            <label className = { classes.box }>
                { clicked && <CheckIcon  className = { classes.ico }/> }
                <input 
                    onChange = { click as () => void }
                    type = 'checkbox' 
                    className = { classes.inputCheck }
                />
            </label>
            {/* {<CircularProgress size = '2rem' classes = {{root : classes.progress}}/>} */}
        </div>
    )
};


