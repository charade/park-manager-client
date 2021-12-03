import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles(theme => ({
    paper : {
        display : 'flex',
        justifyContent : 'space-around',
        alignItems: 'center',
        width: '100%',
        background : theme.palette.secondary.light,
        height : '6rem',
    },
    logo : {
        width : '5.5rem',
        height :'4.7rem',
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