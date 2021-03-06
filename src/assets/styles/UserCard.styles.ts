import { makeStyles } from '@material-ui/core';
import { UP_MEDIUM_SCREEN } from '../utils/constants';

const useUserCardStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center',
        width : '100%',
        [theme.breakpoints.up('sm')] :{
            alignItems : 'flex-start',
            padding :'0 .5rem',
            width :'20rem'
        },
        [theme.breakpoints.up('md')]:{
            width :'19rem'
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]: {
            width :'20%',
            padding :'0 1.5rem',
        }
    },
    card : {
        position : 'relative',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        width : '100%',
        background : theme.palette.secondary.light,
        maringTop: '2rem',
        paddingTop :'.7rem',
    },
    cardContent  : {
        zIndex : 2,
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        minHeight : '80%',
        width :'100%',
        //target hidden form to update user
        '& > *:nth-child(3)' : {
            width : '100%',
        }
    },
    avatarRoot :{
        [theme.breakpoints.up('sm')]:{
            width: '5rem',
            height :'5rem'
        },
        [theme.breakpoints.up(UP_MEDIUM_SCREEN)]: {
            width: '8rem',
            height :'8rem'
        }
    },
    userName : {
        fontSize : '2rem',
        color : 'rgba(0, 0, 0, .7)',
        alignSelf: 'center',
        [theme.breakpoints.up('sm')]:{
            fontSize :'1.3rem'
        }
    },
    btn : {
        color : '#fff',
        border :'none',
        background :theme.palette.primary.main,
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
}));

export default useUserCardStyle;