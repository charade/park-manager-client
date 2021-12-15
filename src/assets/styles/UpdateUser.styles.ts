import { makeStyles } from "@material-ui/core";

const useUpdateUserStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection :'column'
    },
    field : {
        display :'flex',
        flexDirection : 'column',
        fontSize :'1.5rem',
        margin :'1rem 0',
        width: '100%',
        padding: '0 .5rem',
        //buttons
        '&:first-child > *:first-child > label' : {
            background : '#E0A507',
        },
        '&:nth-child(2) > *:first-child > label' : {
            // background : '#05B5ED',
            background : '#5F946D',
        },
        '&:nth-child(3) > *:first-child > label' : {
            background : theme.palette.primary.main
        },
        '&:nth-child(4) > *:first-child > label' : {
            background : '#8B5F94',
        },
        [theme.breakpoints.up('sm')] :{
            margin :'1.3rem 0'
        },
    },
    box : {
        display :'flex',
        background: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overview : {
        color : 'rgba(0, 0, 0, .5)',
        margin :'1rem',
        fontSize :'1.2rem'
    },
    fieldOpener :{
        display :'flex',
        alignItems :'center',
        color :'#fff',
        padding :'.4rem',
        borderRadius :'.5rem',
        '& > *' : {
            margin :'0 .5rem',
        },
        cursor :"pointer",
        fontSize :'1rem'
    },
    submitButton : {
        border :'1px solid rgba(20, 40, 50, .4)',
        borderRadius :'50%',
        color : theme.palette.primary.main,
        margin : '.5rem 1rem',
        width : '4rem',
        height : '4rem',
        justifyContent : 'center',
        alignSelf : 'center'
    }
}));

export default useUpdateUserStyle;