import { makeStyles } from '@material-ui/core';

const useSearchFieldStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        height : '4.7rem',
        alignItems: 'center',
    },
    fieldLabel : {
        color : 'rgba(0, 0, 0, .8)'
    }
}));

export default useSearchFieldStyle;