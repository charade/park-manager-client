import { makeStyles } from "@material-ui/core";

const useFinderStyle = makeStyles({
    container : {
        display :'flex',
        alignItems :'center',
        flexDirection :'column',
        minWidth  : '30rem',
        minHeight :'5rem',
        background : '#4A4A4A',
        fontSize :'1.5rem',
    },
    info : {
        width : '100%',
        color : 'white',
        display :'flex',
        flexDirection: 'column',
        padding :'2rem',
        '& > *':{
            margin : '.6rem'
        }
    },
    action :{
        display :'flex',
        width :'100%',
        padding :'1rem',
        justifyContent :'flex-start',
        //override checkbox
        '& > *:first-child' :{
            width :'10%',
            marginRight :'.5rem'
        },
    },
    actionText :{
        color :'white',
    }
});
export default useFinderStyle;