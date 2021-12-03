import { makeStyles } from "@material-ui/core";

const useButtonStyle = makeStyles(theme =>({
    button : {
        display: 'flex',
        alignItems : 'center',
        border : 'none'
    },
    label : {
        fontFamily : theme.typography.fontFamily,
    },
    icon : {
        margin : '.8rem'
    }
}));

export default useButtonStyle;