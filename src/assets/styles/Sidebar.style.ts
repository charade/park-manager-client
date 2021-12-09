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
            width : '30rem !important',
        },
    },
    drawer : {
        display : 'flex',
        flexDirection : 'column',
        width : '19rem',
        height : '100%',
        listStyle : 'none',
        background : 'rgb(34, 40, 64)',
        boxShadow :'0 0 .6rem rgba(0, 0, 0, .4)',
        overflowY : 'scroll',
        [theme.breakpoints.up('sm')] :{
            width : '100%',
        }
    },
    list : {
        height : '100%',
        width : '100%',
        padding :'1rem .5rem',
        display :'flex',
        flexDirection :'column',
        [theme.breakpoints.up('sm')] : {
            paddingTop : '7rem',
            paddingLeft :'1rem'
        }
    }
   
}));

export default useSidebarStyle;