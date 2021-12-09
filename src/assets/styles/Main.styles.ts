import { makeStyles } from "@material-ui/core";

const useMainStyle = makeStyles(theme => ({
    main : {
        height : '100%',
        display : 'flex',
        background: theme.palette.secondary.main,
    }
}));

export default useMainStyle;