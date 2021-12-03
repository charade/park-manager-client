import { makeStyles } from "@material-ui/core";

const useMainContainerStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        height :'100%',
        width : '100%',
    }
}));

export default useMainContainerStyle;