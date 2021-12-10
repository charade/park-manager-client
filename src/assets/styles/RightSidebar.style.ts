import { makeStyles } from "@material-ui/core";
import { UP_MEDIUM_SCREEN } from "../utils/constants";

const useRightSidebarStyle = makeStyles(theme => ({
    backdrop: {
        zIndex : 4,
        position :'fixed',
        top : '5.4rem',
        right : 0,
        height :'100%',
        background :'rgba(0, 0, 0,.9)',
        backdropFilter : 'grayscale(50%) blur(.3rem)',
        display : 'flex',
        justifyContent :'flex-end',
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
    drawer : {
        height : '100%',
        width : '100% !important',
        [theme.breakpoints.up('sm')] :{
        }
    },
    list : {
        height : '100%',
        width : '100%',
        padding :'1rem .5rem',
        display :'flex',
        flexDirection :'column',
        [theme.breakpoints.up('sm')] : {
            // paddingTop : '7rem',
            // paddingLeft :'1rem'
        }
    }
   
}));

export default useRightSidebarStyle;