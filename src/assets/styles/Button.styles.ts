import { makeStyles } from "@material-ui/core";

const useButtonStyle = makeStyles(theme =>({
    button : {
        display: 'flex',
        alignItems : 'center',
    },
    label : {
        fontFamily : theme.typography.fontFamily,
    },
}));

export default useButtonStyle;