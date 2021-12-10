import { makeStyles } from "@material-ui/core";
import { UP_MEDIUM_SCREEN } from "../utils/constants";

const useNavbarStyle = makeStyles(theme => ({
    root : {
        zIndex : 7,
        position :'fixed',
        height : '6rem',
        width :'100%',
    },
    paper : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems :'center',
        width : '100%',
        height :'100%',
        padding :'0 .9rem',
    },
    toolbar :{
        display : 'inline-flex',
        width : '20%',
        justifyContent :'space-between',
        alignItems :'center',
       
    },
    avatarRoot: {
        maxWidth: '4rem',
        maxHeight :'4rem',
        margin: '2.8rem',
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            margin: '4.7rem'
        }
    },
    avatarPlaceHolder :{
        fontSize :'1.4rem'
    },
    
    logout : {
        display: 'flex',
        justifyContent: 'flex-end',
        width :'75%',
        [theme.breakpoints.up('sm')]: {
            width :'85%'
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]: {
            width: '90%'
        }
    },
    companyName : {
        fontSize :'1.6rem',
        color :theme.palette.primary.main,
        fontFamily:  'Avenir Next',
        fontWeight : 700,
        marginRight: '1rem'
    },
    navItem : {
        border : 'none',
        color :theme.palette.primary.main,
        background: 'transparent'
    },
    icon: {
        width : '3rem',
        height :'3rem',
        marginLeft :'.5rem'
    }
}));

export default useNavbarStyle;