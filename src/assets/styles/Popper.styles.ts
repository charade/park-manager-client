import { makeStyles } from "@material-ui/core";

const usePopperStyle = makeStyles(theme => ({
    root : {
        background : 'rgba(0, 0, 0, .6)',
    },
    paper : {
        width  : '30rem',
        height :'23rem',
        overflow :'hidden',
    }
}));

export default usePopperStyle;