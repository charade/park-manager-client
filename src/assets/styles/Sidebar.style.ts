import { makeStyles } from "@material-ui/core";

const useSidebarStyle = makeStyles(theme => ({
    drawer : {
        zIndex : 4,
        position :'fixed',
        top : '5.4rem',
        right : 0,
        display : 'flex',
        flexDirection : 'column',
        width : '23rem',
        maxHeight : '100%',
        padding: '3rem .6rem',
        listStyle : 'none',
        background : '#fff',
        boxShadow :'0 0 .3rem rgba(0, 0, 0, .4)',
        overflowY : 'scroll',
        [theme.breakpoints.up('sm')] :{
            position :'static',
            paddingTop : '8rem'
        },
    },
    item : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        borderRadius :'.5rem',
        padding: '.3rem',
        marginTop :'1.5rem',
        cursor : 'pionter',
        '&:hover': {
            background : 'rgba(157, 203, 234, .4)'
        },
    },
    avatarRoot : {
        width : '5rem',
        height : '5rem ',
        background : 'rgba(0, 0, 0, .4)'
    },
    avatarPlaceholder : {
        fontSize :'1.4rem'
    },
    userName: {
        fontSize :'1.3rem',
        color : theme.palette.primary.main,
        margin: '.7rem'
    }
}));

export default useSidebarStyle;