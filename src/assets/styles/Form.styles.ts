import { makeStyles } from '@material-ui/core';

const useFormStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        width : '25rem',
        minHeight : '20rem',
        borderRadius : '.8rem',
        padding : '1.5rem 0',
        boxShadow : '0 0 .4rem rgba(0, 0, 0, .8)',
        '& > *' : {
            margin : '1rem',
            color  : theme.palette.secondary.light
        },
        background : theme.palette.primary.main,
    },
    caption : {
        fontSize : '1.8rem',
        marginBottom : '1rem',
    }
}));

export default useFormStyle;