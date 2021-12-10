import { makeStyles } from "@material-ui/core";

const useUpdateUserFieldStyle = makeStyles(theme => ({
    
    block : {
        display :'flex',
        flexDirection : 'column',
        fontSize :'1.5rem',
        margin :'1rem 0',
        width: '100%',
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
            margin :'3rem 0'
        },
    },
    box : {
        display :'flex',
        background: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reminder : {
        color : 'rgba(0, 0, 0, .5)',
        margin :'1rem',
        fontSize :'1.2rem'
    },
    btn :{
        display :'flex',
        alignItems :'center',
        color :'#fff',

        margin : '0 .5rem',
        padding :'.4rem',
        borderRadius :'.5rem',
        '& > *' : {
            margin :'0 .5rem',
        },
        cursor :"pointer",
        fontSize :'1rem'
    }
}));

export default useUpdateUserFieldStyle;