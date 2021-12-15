import { makeStyles } from '@material-ui/core';

const useRightSidebarItemStyle = makeStyles(theme => ({
    box : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        borderRadius :'.5rem',
        marginBottom :'1rem',
        cursor : 'pointer',
        color :'#fff',
        [theme.breakpoints.up('sm')] : {
            color: 'rgba(0, 0, 0, .7)'
        },
    },
    avatarRoot : {
        width : '4.5rem !important',
        height : '4.5rem !important ',
        background : 'rgba(0, 0, 0, .4)',
        margin : '.5rem'
    },
    avatarPlaceholder : {
        fontSize :'1.4rem'
    },
    userName: {
        display : 'inline-flex',
        flexDirection: 'column',
        // justifyContent :'center',
        fontSize :'1.3rem',
        marginLeft: '0rem',
        flex: 1
    },
    underline: {
        height :'2px',
        background : '#E0A507',
        maxWidth : '6rem',
        borderRadius :'5rem',
        margin : '.5rem 0'
    }
}));

export default useRightSidebarItemStyle;