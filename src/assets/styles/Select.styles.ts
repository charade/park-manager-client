import { makeStyles } from '@material-ui/core';

const useSelectStyle = makeStyles(theme =>({
    container : {
        position : 'relative',
        display : 'flex',
        height : '3rem',
        alignItems: 'center',
        borderRadius  : '.5rem',
        justifyContent : 'flex-start'
    },
    fieldLabel : {
        color : 'rgba(0, 0, 0, .8)'
    },
    input : {
        border : 'none'
    },
    caption : {
        fontSize :'1.2rem',
        width :'100%',
        position :'absolute',
        paddingLeft: '1rem',
        color :'rgba(0, 0, 0, .6)'
    },
    btn: {
        border : 'none',
        color :theme.palette.primary.main,
        background: 'transparent'
    },
    icon: {
        color :theme.palette.primary.main,
        background: 'transparent',
        minWidth : '2.5rem',
        minHeight :'2.5rem',
        border : `1px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        padding: '.3rem'
    }
}));

export default useSelectStyle;