import { makeStyles } from "@material-ui/core";

const useSidebarStyle = makeStyles(theme => ({
    backdrop: {
        zIndex : 4,
        position :'fixed',
        top : '5.4rem',
        right : 0,
        height :'100%',
        background :'rgba(0, 0, 0,.6)',
        backdropFilter : 'grayscale(50%) blur(.3rem)',
        display : 'flex',
        justifyContent :'flex-end',
        overflow : 'hidden',
        [theme.breakpoints.up('sm')] :{
            position :'static',
            width : '40rem !important',
        },
    },
    drawer : {
        display : 'flex',
        flexDirection : 'column',
        width : '20rem',
        height : '100%',
        padding: '3rem .6rem',
        listStyle : 'none',
        background : '#fff',
        boxShadow :'0 0 .6rem rgba(0, 0, 0, .4)',
        overflowY : 'scroll',
        [theme.breakpoints.up('sm')] :{
            width : '100%',
            padding: ' 5rem .5rem'
        }
       
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
        width : '5.5rem',
        height : '5.5rem ',
        background : 'rgba(0, 0, 0, .4)',
        [theme.breakpoints.up('sm')] : {
            width : '6rem',
            height : '6rem'
        }
    },
    avatarPlaceholder : {
        fontSize :'1.4rem'
    },
    userName: {
        fontSize :'1.3rem',
        color : theme.palette.primary.main,
        margin: '.7rem',
        [theme.breakpoints.up('sm')] : {
            fontSize : '1.6rem'
        }
    }
}));

export default useSidebarStyle;