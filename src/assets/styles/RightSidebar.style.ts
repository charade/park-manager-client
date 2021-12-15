import { makeStyles } from "@material-ui/core";
import { UP_MEDIUM_SCREEN } from "../utils/constants";

const useRightSidebarStyle = makeStyles(theme => ({
    backdrop: {
        zIndex : 4,
        position :'fixed',
        top : '5.4rem',
        right : 0,
        display : 'flex',
        justifyContent :'flex-end',
        flexDirection: 'column',
        height :'100%',
        background :'rgba(0, 0, 0,.9)',
        backdropFilter : 'grayscale(50%) blur(.3rem)',
        overflow : 'hidden',
        [theme.breakpoints.up('sm')] :{
            position :'static',
            maxWidth : '15rem',
            background :'transparent',
        },
        [theme.breakpoints.up('md')]:{
            maxWidth : '17rem',
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            maxWidth :'23rem',
            paddingLeft : '1.5rem',
        },
    },
    closeBtn : {
        width :'3rem',
        height :'3rem',
        alignSelf: 'flex-start',
        color: '#fff',
        margin :'1rem',
        background :'inherit',
        borderRadius:'50%',
        border: '1px solid rgba(255, 255, 255, .7)'
    },
    drawer : {
        height : '100%',
        width : '100% !important',
    },
    list : {
        height : '100%',
        width : '100%',
        // padding :'1rem 0',
        display :'flex',
        flexDirection :'column',
        padding : 0
    }
   
}));

export default useRightSidebarStyle;