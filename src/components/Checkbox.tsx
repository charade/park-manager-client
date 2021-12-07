import { useCheckboxStyle } from '../assets/styles/index.styles';
import CheckIcon from '@mui/icons-material/Check';
/**
 * Allow users to reserve a place
 */
type CheckProps = {
    id : string,
    onChange : () => void
    success : boolean
};

export const Checkbox = ({ id, onChange, success }: CheckProps) => {
    const classes = useCheckboxStyle();
    
    return(
        <div className = { classes.container }>
            <label className = { classes.box }>
                {/* checked on request success */}
                { success && <CheckIcon  className = { classes.ico }/> }
                <input 
                    onChange = { onChange }
                    type = 'checkbox' 
                    className = { classes.inputCheck }
                />
            </label>
            {/* fires before remove place form available ones */}
           
        </div>
    )
};


