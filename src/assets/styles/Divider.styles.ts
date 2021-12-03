import { makeStyles } from "@material-ui/core";

const useDividerStyle = makeStyles(theme =>({
    line : {
        height : '1px',
        borderBottom : '1px solid rgba(0, 0, 0, .4)',
        alignSelf : 'center',
        display : 'flex',
        justifyContent : 'center',
        alignItems :'center'
    },
    label : {
        fontSize : '1.7rem',
        color: 'rgba(0, 0, 0, .6)',
        fontFamily : theme.typography.fontFamily,
        background : theme.palette.secondary.main,
        padding : '.2rem .8rem',
    }
}));

export default useDividerStyle;