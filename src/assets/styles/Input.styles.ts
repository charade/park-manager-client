import { makeStyles } from "@material-ui/core";

const useInputStyle = makeStyles(theme => ({
    fieldContainer :{
        position : 'relative',
        width : '85%',
        height : '3.5rem',
        background  : 'inherit',
    },
    label : {
        position :'absolute',
        fontSize : '1.4rem',
        width : '100%',
        height :'70%',
        color :'rgba(255, 255, 255, .7)'
    },
    inputField : {
        width : '100%',
        height : '100%',
        fontSize :'1.7rem',
        outline : 'none',
        border : 'none',
        borderBottom : '1px solid rgba(0, 0, 0, .3)',
        background  : 'inherit',
        color : '#fff'
    },
    underline : {
        height : '2px',
        position : 'absolute',
        left : 0,
        top :'92%',
        background : 'rgba(200, 0, 0, .8)'
    }
}));

export default useInputStyle;