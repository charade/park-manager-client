import { makeStyles } from "@material-ui/core";

const useMainContainerStyle = makeStyles(theme => ({
    container : {
        position :'relative',
        display : 'flex',
        flexDirection : 'column',
        height :'100%',
        width : '100%',
    },
    divider : {
        width : '100%',
        margin : '2rem 0',
        [theme.breakpoints.up('sm')]: {
            width : '85%'
        }
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
           background : theme.palette.primary.light
       },
       //icon
       '& > *' : {
           minWidth : '2rem',
           minHeight :'2rem'
        },
    },
}));

export default useMainContainerStyle;