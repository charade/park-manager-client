import { makeStyles } from "@material-ui/core/styles";

const useHelperStyle = makeStyles(theme =>({
    message : {
        fontSize : '1.4rem',
        color : 'rgba(255, 150, 0, .9)',
        fontFamily : theme.typography.fontFamily
    }
}));
export default useHelperStyle;