import { makeStyles } from "@material-ui/core";

const useLoginViewStyle = makeStyles(theme => ({
    root : {
        position : 'relative',
        height : '100%',
        display : 'flex', 
        alignItems : 'center',
        justifyContent: 'center',
        flexDirection : 'column',
    },
    register : {
        position :'absolute',
        top : '90%',
        left: '50%',
        transform : 'translateX(-50%)',
        color : theme.palette.primary.main,
        fontSize : '1.5rem',
        textDecoration : 'underline',
        cursor : 'pointer',
        width : '25rem',
    }
}));

export default useLoginViewStyle;