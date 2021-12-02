import { makeStyles } from "@material-ui/core";

const useLoginFormStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection :'column',
        alignItems : 'center',
        width : '25rem',
        borderRadius : '.8rem',
        minHeight : '40rem',
        padding : '1.5rem 0',
        boxShadow : '0 0 .4rem rgba(0, 0, 0, .8)',
        '& > *' : {
            fontFamily : theme.typography.fontFamily,
            margin : '1.5rem',
            color  :'white'
        },
        background : theme.palette.primary.main,
    },
    title : {
        fontSize : '1.8rem',
        marginBottom : '4rem',
    },
    submitBtn : {
        margin: '2.5rem',
        border :'1px solid rgba(255, 255, 255, .5)',
        borderRadius : '1rem',
        padding :'.5rem 1rem',
        background : 'inherit'
    },
    footer : {
        display : 'flex',
        flexDirection : 'column',
        fontSize: '1.5rem',
        alignItems: 'center'
    },
    stepSwitch : {
        textDecoration : 'underline',
        color : theme.palette.primary.light,
        cursor : 'pointer'
    }
}));

export default useLoginFormStyle;