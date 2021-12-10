import { makeStyles } from "@material-ui/core";

const useTooblarStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        height : '100%',
        listStyle : 'none',
        overflowY : 'scroll',
        padding : 0,

    },
}));

export default useTooblarStyle;