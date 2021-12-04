import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 7,
        position :'fixed',
        height : '6rem',
        width :'100%',
    },
    paper : {
        width : '100%',
        height :'100%',
        position : 'relative',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems: 'center',
        background : theme.palette.secondary.light,
    },
    logo : {
        width : '4.8rem',
        height :'4rem',
    },
    //button
    navItem : {
        width : '4rem',
        height :'4rem',
        border : 'none',
        background : theme.palette.secondary.light,
        //button icon
        '& > *' : {
            minWidth : '100%',
            minHeight : '100%',
            color : 'rgba(0, 0, 0, .6)',
        },
    },
}));

export default useNavbarStyle;