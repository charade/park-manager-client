import { makeStyles } from "@material-ui/core";

const useSelectFloorsStyle = makeStyles(theme =>({
    container: {
        position : 'absolute',
        top :'90%',
        left : 0,
        width :'100%',
        listStyle : 'none',
        maxHeight : '20rem',
        overflow : 'scroll',
        background : 'rgba(0, 0, 0, .9)',
        borderRadius :'.5rem',
        boxShadow : '0 0 .4rem black',
        display : 'flex',
        flexDirection :'column',
        padding : '1rem',
        '& > *' : {
            margin : '.8rem 0'
        }
    },
    item:{
        width :'100%',
        color :'#fff',
        fontSize :'1.7rem',
        '&:hover':{
            background : theme.palette.primary.light
        },
        paddingLeft : '1.5rem'
    }
}));

export default useSelectFloorsStyle;