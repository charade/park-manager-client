import { useCheckboxStyle } from '../assets/styles/index.styles';
import CheckIcon from '@mui/icons-material/Check';

type CheckProps = {
    onChange : () => void
    success : boolean
};

export const Checkbox = ({ onChange, success }: CheckProps) => {
    const classes = useCheckboxStyle();
    
    return(
        <div className = { classes.container }>
            <label className = { classes.box }>
                { success && <CheckIcon  className = { classes.ico }/> }
                <input 
                onChange = { onChange }
                type = 'checkbox' 
                className = { classes.inputCheck }
                />
            </label>
        </div>
    )
};


