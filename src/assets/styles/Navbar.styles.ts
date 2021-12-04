import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles(theme => ({
    paper : {
        position :'fixed',
        zIndex : 7,
        width : '100%',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems: 'center',
        background : theme.palette.secondary.light,
        height : '6rem',
    },
    logo : {
        width : '4.8rem',
        height :'4rem',
    },
    //button
    navItem : {
        width : '4.8rem',
        height :'4.8rem',
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