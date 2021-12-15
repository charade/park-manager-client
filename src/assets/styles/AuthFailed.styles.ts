import {  makeStyles } from '@material-ui/core';

const useAuthFailedStyle  = makeStyles(theme => ({
    container : {
        height : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        flexDirection : 'column'
    },
    caption : {
        fontSize : '2rem'
    }
}));

export default useAuthFailedStyle;