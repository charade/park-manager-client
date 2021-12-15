import { makeStyles } from "@material-ui/core";

const useDividerStyle = makeStyles(theme =>({
    line : {
        height : '1px',
        borderBottom : '1px solid rgba(0, 0, 0, .1)',
        alignSelf : 'center',
        display : 'flex',
        justifyContent : 'center',
        alignItems :'center',
        width : '80%'
    },
    label : {
        fontSize : '1.3rem',
        background : theme.palette.secondary.main,
        padding : '.2rem .8rem',
        color :theme.palette.primary.main
    }
}));

export default useDividerStyle;