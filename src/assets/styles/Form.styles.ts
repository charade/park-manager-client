import { makeStyles } from '@material-ui/core';

const useFormStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        width : '25rem',
        borderRadius : '.8rem',
        minHeight : '20rem',
        padding : '1.5rem 0',
        boxShadow : '0 0 .4rem rgba(0, 0, 0, .8)',
        '& > *' : {
            fontFamily : theme.typography.fontFamily,
            margin : '1.5rem',
            color  : theme.palette.secondary.light
        },
        background : theme.palette.primary.main,
    },
    caption : {
        fontSize : '1.8rem',
        marginBottom : '4rem',
    }
}));

export default useFormStyle;