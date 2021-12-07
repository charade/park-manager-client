import { makeStyles } from '@material-ui/core';

const useSidebarItemStyle = makeStyles(theme => ({
    box : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        borderRadius :'.5rem',
        padding: '.3rem',
        marginTop :'1.5rem',
        cursor : 'pointer',
        '&:hover': {
            background : 'rgba(157, 203, 234, .4)'
        },
    },
    avatarRoot : {
        width : '5.5rem',
        height : '5.5rem ',
        background : 'rgba(0, 0, 0, .4)',
        [theme.breakpoints.up('sm')] : {
            width : '6rem',
            height : '6rem'
        }
    },
    avatarPlaceholder : {
        fontSize :'1.4rem'
    },
    userName: {
        fontSize :'1.3rem',
        color : theme.palette.primary.main,
        margin: '.7rem',
        [theme.breakpoints.up('sm')] : {
            fontSize : '1.6rem'
        }
    }
}));

export default useSidebarItemStyle;