import { makeStyles } from '@material-ui/core';

const useAvarStyle = makeStyles(theme =>({
    box : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width  : '8rem',
        height : '8rem',
        borderRadius : '50%',
        border:'1px solid #fff',
        background : 'lightgrey',
        overflow :'hidden'
    },
    img : {
        width :'100%',
        height :'100%'
    },
    placehoder :{
        fontSize : '5rem',
        fontFamily  : theme.typography.fontFamily,
        color: 'rgba(0, 0, 0, .6)'
    }
}));

export default useAvarStyle;