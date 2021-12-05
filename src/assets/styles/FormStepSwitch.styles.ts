import { makeStyles } from "@material-ui/core";

const useFormStepSwitchStyle = makeStyles(theme => ({
    footer : {
        display : 'flex',
        flexDirection : 'column',
        fontSize: '1.5rem',
        alignItems: 'center'
    },
    stepSwitch : {
        textDecoration : 'underline',
        color : 'rgb(157, 203, 234)',
        cursor : 'pointer'
    }
}));

export default useFormStepSwitchStyle;