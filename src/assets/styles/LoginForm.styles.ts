import { makeStyles } from "@material-ui/core";

const useLoginFormStyle = makeStyles(theme => ({
    footer : {
        display : 'flex',
        flexDirection : 'column',
        fontSize: '1.5rem',
        alignItems: 'center'
    },
    stepSwitch : {
        textDecoration : 'underline',
        color : theme.palette.primary.light,
        cursor : 'pointer'
    }
}));

export default useLoginFormStyle;