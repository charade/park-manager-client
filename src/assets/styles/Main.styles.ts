import { makeStyles } from "@material-ui/core";

const useMainStyle = makeStyles(theme => ({
    root : {
        position: 'relative',
        height : '100%',
        display : 'flex',
        flexDirection: 'column',
        background: theme.palette.secondary.main,
        overflow : 'hidden'
    },
    container : {
        width: '100%',
        display : 'flex',
        paddingTop: '6.1rem',
        height :'100%',
        justifyContent : 'space-between',
        [theme.breakpoints.up('md')] : {
            paddingTop : '7rem',
        }
    }
}));

export default useMainStyle;