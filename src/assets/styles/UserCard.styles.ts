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
            width :'47%'
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
        background : theme.palette.secondary.light,
        maringTop: '2rem',
        paddingTop :'.7rem',
        [theme.breakpoints.up('sm')] :{
            borderRadius :'1rem',
        },

    },
    cardHeader : {
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
        width :'100%',
        //target hidden form to update user
        "& > *:nth-child(3)" : {
            width : '100%',
        }

    },
    userName : {
        fontSize : '2rem',
        fontFamily : theme.typography.fontFamily,
        color : 'rgba(0, 0, 0, .7)',
        alignSelf: 'center',
    },
    btn : {
        color : 'rgba(0, 0, 0, .7)',
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
}));

export default useUserCardStyle;