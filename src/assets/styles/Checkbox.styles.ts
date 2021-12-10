import { makeStyles } from '@material-ui/core';

const useCheckboxStyle = makeStyles({
    container : {
        height : '100%',
        display :'flex',
        alignItems : 'center',
        justifyContent :'center',
    },
    box : {
        position : 'relative',
        width : '1.7rem',
        height : '1.7rem',
        borderRadius : '.4rem',
        border : '1px solid rgba(0, 0, 0, .2)',
        cursor : 'pointer'
    },
    inputCheck : {
        position :'absolute',
        width :'100%',
        height :'100%',
        top :'-20%',
        left :'-25%',
        visibility : 'hidden'
    },
    progress : {
        marginLeft : '2rem'
    },
    ico : {
        width : '100%',
        height :'100%',
        background : 'rgb(123, 185, 115)',
        display : 'block',
        color: '#fff'
    }
   
});
export default useCheckboxStyle;