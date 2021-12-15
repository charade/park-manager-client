import { makeStyles } from '@material-ui/core';

const useUpdateAvatarFieldStyle = makeStyles(theme =>({
    container :{
        cursor :'pointer',
        display :'inline-flex',
        alignItems :'center',
        fontSize: '1.4rem',
        margin :'1.7rem .5rem',
        color :theme.palette.primary.main,
    },
    icon : {
        maxWidth : '3rem',
        marginRight :'.7rem'
    }
}));

export default useUpdateAvatarFieldStyle;