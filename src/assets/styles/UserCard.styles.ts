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
        alignItems : 'center',
        width : '98%',
        height : '100%',
        boxShadow : '0 0 .3rem rgba(0, 0, 0, .6)',
        borderRadius : '1rem',
        overflow: 'hidden',
        background : theme.palette.primary.main
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
        height : '90%'

    },
    userName : {
        fontSize : '2rem',
        fontFamily : theme.typography.fontFamily,
        color : theme.palette.secondary.light
    }

}))

export default useUserCardStyle;