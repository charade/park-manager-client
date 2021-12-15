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
            minWidth: '47%',
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
        width : '10rem',
        height :'2.6rem',
        justifyContent: 'flex-start',
        color : 'rgb(157, 203, 234)',
        border :'none',
        padding: '1rem',
        borderRadius : '4rem 2rem 6rem',
        clipPath : 'polygon(0 0, 70% 0, 100% 100%, 0 100%)',
        marginBottom : '-2.8rem',
        background : 'rgb(34, 40, 64)',
        borderadius :'0 4rem 1rem 0 0',
        fontSize :'1.4rem',
        cursor : 'pointer',
        '&:first-of-type' : {
            clipPath : 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            borderRadius : '4rem 6rem 2rem',
            alignSelf: 'flex-end',
            justifyContent :'flex-end',
        },
        //icon
        '& > *' : {
            minWidth : '1rem',
            minHeight :'1rem',
            margin :'.5rem'
        },
    },
}));

export default useMainContainerStyle;