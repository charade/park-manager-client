import { makeStyles } from '@material-ui/core';

const useRightSidebarItemStyle = makeStyles(theme => ({
    box : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        borderRadius :'.5rem',
        padding: '.3rem',
        marginTop :'1rem',
        cursor : 'pointer',
        color :'#fff',
        '&:hover': {
            background : 'rgba(157, 203, 234, .4)'
        },
        [theme.breakpoints.up('sm')] : {
            color: 'rgba(0, 0, 0, .7)'
        }
    },
    avatarRoot : {
        width : '4.5rem !important',
        height : '4.5rem !important ',
        background : 'rgba(0, 0, 0, .4)',
        [theme.breakpoints.up('sm')] : {
            width : '7rem',
            height : '7rem'
        }
    },
    avatarPlaceholder : {
        fontSize :'1.4rem'
    },
    userName: {
        fontSize :'1.3rem',
        marginLeft: '.7rem',
    }
}));

export default useRightSidebarItemStyle;