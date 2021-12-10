import { makeStyles } from "@material-ui/core/styles";

const useLeftSidebarStyle = makeStyles(theme => ({
    drawer : {
        width : '3rem',
        alignItems: 'center',
        position: 'fixed',
        height: '100%',
        zIndex: 4,
        margin: '1rem',
        [theme.breakpoints.up('sm')]: {
            position :'static',
            width: '17rem',
            alignItems: 'flex-start',
            margin :0
        },
        [theme.breakpoints.up('md')] : {
            width: '12rem',
        }
    },
    item : {
        color :theme.palette.primary.main,
        border :'1px solid rgb(157, 203, 234)',
        width : '100%',
        height :'3rem',
        borderRadius: '50%',
        alignItems : 'center',
        justifyContent :'center',
        cursor : 'pointer',
        margin: '.7rem',
        '&:hover':{
            background: 'rgba(157, 203, 234, .3)'
        },
        [theme.breakpoints.up('sm')]:{
            border :'none',
            borderRadius : '.8rem',
            justifyContent :'flex-start',
            heigh : '3rem',
            fontSize :'1rem',
        },
        padding: 0,
    },
    icon: {
        minWidth : '100%',
        minHeight :'100%',
        // margin :'.5rem'
        [theme.breakpoints.up('sm')]:{
            minWidth: '10%',
            margin: '.8rem'
        }
    }
}));

export default useLeftSidebarStyle;