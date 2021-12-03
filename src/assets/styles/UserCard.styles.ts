import { makeStyles } from '@material-ui/core';

const useUserCardStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center',
        width : '100%',
        height : '30%',
        margin : '3rem 0',
    },
    card : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        width : '100%',
        height : '100%',
        boxShadow : '0 0 .3rem rgba(0, 0, 0, .6)',
        overflow: 'hidden',
        background : theme.palette.primary.main,
        paddingTop :'.7rem'
    },
    cardHeader : {
        background : theme.palette.secondary.light,
        position : 'absolute',
        width : '100%',
        height : '5rem',
        top : '0',
    },
    cardContent  : {
        zIndex : 2,
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        height : '80%',
    },
    userName : {
        fontSize : '2rem',
        fontFamily : theme.typography.fontFamily,
        color : theme.palette.secondary.light
    },
    btn : {
        color : theme.palette.secondary.light,
        border :'none',
        background :'rgba(0, 0, 0, .12)',
        fontSize :'1.6rem',
        marginTop :'1.5rem',
        fontWeight : 300,
        justifyContent : 'center',
        width : '100%',
        '& > *' : {
            margin :'.5rem'
        }
    },
    btnIcon : {
        minWidth : '2.5rem',
        minHeight :'2.5rem',
    }
}))

export default useUserCardStyle;