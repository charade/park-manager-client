import { makeStyles } from '@material-ui/core';

const useSnackbarStyle = makeStyles(theme => ({
    snackbar : {
        zIndex : 14,
        position : 'fixed',
        bottom : '10rem',
        left : '.5rem',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        minWidth : '25rem',
        fontSize : '1.4rem',
        background : 'rgba(0, 0, 0, .8)',
        borderRadius : '.5rem',
        hieght :'2.5rem',
        height : '4rem',
        color: '#fff',
        backdropFilter : 'blur(.3rem) grayscale(50%)'
    },
    icon : {
        minWidth : '3rem',
        minHeight : '3rem',
        color : 'lightgrey'
    },
    closeBtn : {
        width : '1.8rem',
        height : '1.8rem',
        background : 'transparent',
        border : 'none',
        '& > *' : {
            minWidth : '100%',
            minHeight : '100%',
            color : 'white'
        }
    },
}));

export default useSnackbarStyle ; 