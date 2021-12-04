import { makeStyles } from '@material-ui/core';
const useCheckboxStyle = makeStyles({
    container : {
        height : '100%',
        display :'flex',
        alignItems : 'center',
        width :'100%',
        justifyContent :'center',
        
    },
    box : {
        position : 'relative',
        width : '1.7rem',
        height : '1.7rem',
        borderRadius : '.4rem',
        border : '1px solid lightgrey',
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
        
    }
   
});
export default useCheckboxStyle;