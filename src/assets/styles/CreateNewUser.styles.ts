import { makeStyles } from "@material-ui/core";

const useCreateUserStyle = makeStyles(theme => ({
    submitBtn : {
        background: 'inherit',
        border :'1px solid rgba(255, 255, 255, .6)',
        borderRadius :'.8rem',
        padding :'.2rem .7rem',
        fontSize :'1.4rem'
    }
}));

export default useCreateUserStyle;