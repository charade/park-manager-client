import { makeStyles } from '@material-ui/core';

const useSelectStyle = makeStyles(theme =>({
    container : {
        position : 'relative',
        display : 'flex',
        height : '4.7rem',
        alignItems: 'center',
        borderRadius  : '.5rem',
        padding :'0',
        justifyContent : 'flex-start'
    },
    fieldLabel : {
        color : 'rgba(0, 0, 0, .8)'
    },
    input : {
        border : 'none'
    },
    caption : {
        fontSize :'1.7rem',
        width :'100%',
        position :'absolute',
        paddingLeft: '1rem',
        color :'rgba(0, 0, 0, .6)'
    }
}));

export default useSelectStyle;