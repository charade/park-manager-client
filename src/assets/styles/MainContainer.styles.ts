import { makeStyles } from "@material-ui/core";

const useMainContainerStyle = makeStyles(theme => ({
    container : {
        position :'relative',
        display : 'flex',
        flexDirection : 'column',
        flex:1,
        alignItems: 'center',
        overflow :'scoll',
        [theme.breakpoints.up('sm')] : {
            minWidth: '40%',
            // border:'1px solid red'
        },
    },
    divider : {
        width : '100%',
        margin : '2rem 0',
        alignSelf: 'center',
        [theme.breakpoints.up('sm')]: {
            width : '90%'
        },
    },
    btn : {
        alignSelf: 'flex-start',
        maxWidth : '7rem',
        justifyContent: 'space-around',
        color : theme.palette.primary.main,
        border :'none',
        borderRadius : '.4rem',
        // margin : '.5rem 3rem',
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