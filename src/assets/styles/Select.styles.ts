import { makeStyles } from '@material-ui/core';

const useSelectStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        height : '4.7rem',
        alignItems: 'center',
        borderRadius  : '.5rem',
        padding :'0 .5rem'
        
    },
    fieldLabel : {
        color : 'rgba(0, 0, 0, .8)'
    },
    input : {
        border : 'none'
    }
}));

export default useSelectStyle;