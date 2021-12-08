import { makeStyles } from "@material-ui/core";

const useFinderStyle = makeStyles({
    container : {
        display :'flex',
        alignItems :'center',
        flexDirection :'column',
        height : '100%',
        background : '#4A4A4A',
        fontSize :'1.7rem',
    },
    info : {
        width : '100%',
        color : 'white',
        display :'flex',
        flexDirection: 'column',
        padding :'1rem',
        '& > *':{
            margin : '.6rem'
        },
    },
    userName : {
        alignSelf :'center',
        color : 'rgba(255, 255, 255, .7)',
        margin :'2rem',
        fontSize :'2rem'
    },
    action :{
        border :'none',
        //override checkbox
        color :'rgba(255, 200, 0, .9)',
        alignSelf :'flex-end',
        background: 'inherit',
        '& > *':{
            margin : '.4rem'
        },
        borderRadius :'.6rem',
        marginRight :'2.5rem',
        paddingRight:'1rem'
    },
    
});
export default useFinderStyle;