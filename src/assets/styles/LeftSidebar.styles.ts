import { makeStyles } from "@material-ui/core/styles";
import { UP_MEDIUM_SCREEN } from "../utils/constants";

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
            width: '9rem',
            alignItems: 'flex-start',
            margin :0
        },
        [theme.breakpoints.up('md')] : {
            width: '9rem',
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            width : '13rem'
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
        padding: 0,
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
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            fontSize :'1.5rem',
        }
    },
    icon: {
        minWidth : '100%',
        minHeight :'100%',
        [theme.breakpoints.up('sm')]:{
            minWidth: '10%',
            margin: '.8rem'
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            minWidth: '18%',
        }
    }
}));

export default useLeftSidebarStyle;