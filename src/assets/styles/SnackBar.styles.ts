import { makeStyles } from '@material-ui/core';

const useSnackbarStyle = makeStyles(theme => ({
    snackbar : {
        position : 'fixed',
        top : '5rem',
        right : '.5rem',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        minWidth : '25rem',
        fontFamily : theme.typography.fontFamily,
        fontSize : '1.4rem',
        background : theme.palette.primary.main,
        borderRadius : '.5rem',
        hieght :'2.5rem',
        height : '4rem',
        color: '#fff',
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