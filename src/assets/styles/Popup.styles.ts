import { makeStyles } from "@material-ui/core";

const usePopperStyle = makeStyles(theme => ({
    paper :{
        position :'absolute',
        top : '100%',
        left :'50%',
        transform : 'translateX(-50%)',
        zIndex: 8,
        background : 'rgba(0, 0, 0, .8)',
        width : '100%',
    },
}));

export default usePopperStyle;