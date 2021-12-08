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
        justifyContent : 'center',
        width : '100%',
        height :'100%',
        background : theme.palette.secondary.light,
        [theme.breakpoints.up('sm')] :{
            justifyContent: 'center'
        },
    },
    box :{
        display : 'flex',
        justifyContent :'space-around',
        flex: 2,
        alignItems :'center',
        '&:first-child' :{
            justifyContent :'space-between',
            paddingLeft: '1rem'
        },
        '&:last-child':{
            flexDirection :'column',
            alignItems :'flex-end',
            paddingRight :'1rem',
            flex: 1
        }
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