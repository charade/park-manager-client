import { makeStyles } from "@material-ui/core";

const useLandingStyle = makeStyles(theme => ({
    root : {
        position : 'absolute',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '100%',
        overflow : 'hidden',
        background : theme.palette.secondary.light
    },
    
}));

export default useLandingStyle;