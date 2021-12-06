import { makeStyles } from "@material-ui/core";

const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 7,
        position :'fixed',
        height : '6rem',
        width :'100%',
        boxShadow :'0 0 .3rem rgba(0, 0, 0, .4)'
    },
    paper : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'flex-end',
        paddingRight : '3rem',
        alignItems: 'center',
        width : '100%',
        height :'100%',
        background : theme.palette.secondary.light,
        [theme.breakpoints.up('sm')] :{
            justifyContent: 'center'
        }
    },
    logo : {
        width : '4.8rem',
        height :'4rem',
        position : 'absolute',
        top : '50%',
        left :'.3rem',
        transform :'translateY(-50%)'
    },
    //button
    navItem : {
        width : '4rem',
        height :'4rem',
        border : 'none',
        background : theme.palette.secondary.light,
        '&:first-child' : {
            flex :2
        },
        //button icon
        '& > *' : {
            minWidth : '70%',
            minHeight : '70%',
            color : 'rgba(0, 0, 0, .6)',
        },
    },
}));

export default useNavbarStyle;