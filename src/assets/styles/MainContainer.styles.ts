import { makeStyles } from "@material-ui/core";

const useMainContainerStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        height :'100%',
        width : '100%',
    },
    divider : {
        width : '100%',
        margin : '2rem 0'
    },
    btn : {
       maxWidth : '7rem',
       padding : '.3rem .5rem',
       justifyContent: 'space-around',
       color : theme.palette.primary.main,
       border :'none',
       borderRadius : '.4rem',
       margin : '1rem',
       fontSize :'1.7rem',
       cursor : 'pointer',
       '&:hover' : {
           background : 'rgba(128, 179, 244, .3)'
       },
       //icon
       '& > *' : {
           minWidth : '2rem',
           minHeight :'2rem'
        },
    },
}));

export default useMainContainerStyle;