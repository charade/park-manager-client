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
            maxWidth : '16rem',
            background :'transparent',
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]:{
            maxWidth :'18rem'
        }
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
        padding :'1rem .5rem',
        display :'flex',
        flexDirection :'column',
    }
   
}));

export default useRightSidebarStyle;