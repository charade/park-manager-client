import { makeStyles } from "@material-ui/core";

const useNewAccountReminderStyle = makeStyles(theme => ({
    container : {
        display: 'flex',
        flexDirection: 'column',
        width : '30rem',
        minHeight : '35rem',
        border :'1px solid rgba(255, 255, 255, .5)',
        borderRadius : '.8rem',
        padding : '1.5rem 0',
        color: 'rgba(0, 0, 0, .7)',
        background : 'rgba(255, 255, 255, .8)',
        boxShadow : '0 0 .3rem #fff'
    },
    caption : {
        display: 'flex',
        fontSize :'1.2rem',
        alignItems : 'center',
        justifyContent: 'center',
        '& > *' : {
            margin :'.7rem'
        }
    },
    captionIcon : {
        width : '5rem',
        height : '5rem',
        borderRadius : '50%',
        background : 'rgb(123, 185, 115)',
    },
    info : {
        fontSize :'1.4rem',
        margin : '1rem 2rem'
    },
    warning : {
        fontSize: '1.3rem',
        display :'flex',
        alignItems: 'center',
        margin :'3rem 0',
        // color : '#E0A507',
        alignSelf: 'center',
        color :theme.palette.primary.main
    },
    check: {
        fontSize :'1.3rem',
        display : 'flex',
        alignItems: 'center',
        '& > *' : {
            margin :'1rem'
        },
        //checkbox component
        '& label:nth-child(n)':{
           border : '1px solid rgba(0, 0 , 0,  .4)' 
        }
    },
    checkText : {
        fontSize :'1.4rem'
    }
}));

export default useNewAccountReminderStyle;