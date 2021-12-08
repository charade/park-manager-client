import { makeStyles } from '@material-ui/core';

const useUserCardStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center',
        width : '100%',
        margin : '6rem 0',
        [theme.breakpoints.up('sm')] :{
            margin :0,
            alignItems : 'flex-start',
            padding :'15rem .5rem',
            width :'40%'
        },
        [theme.breakpoints.up('md')] : {
            paddingTop : '10rem'
        }
    },
    card : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        width : '100%',
        overflow :'scroll',
        boxShadow : '0 0 .3rem rgba(0, 0, 0, .6)',
        background : theme.palette.primary.main,
        maringTop: '2rem',
        paddingTop :'.7rem',
        [theme.breakpoints.up('sm')] :{
            borderRadius :'1rem',
        },
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
        minHeight : '80%',
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