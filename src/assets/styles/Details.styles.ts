import { makeStyles } from "@material-ui/core";

const useDetailsStyle = makeStyles(theme =>({
    container : {
        display : 'flex',
        flexDirection :'column',
        width :'100%',
        height :'100%',
        color :'#fff',
        background :'#4A4A4A',
    },
    block : {
        display :'flex',
        alignItems :'center',
        padding :'1rem .6rem',
    },
    avatarRoot : {
        minWidth : '8rem',
        minHeigh : '7.8rem',
        marginRight :'1rem'
    },
    avatarPlaceHolder :{
        fontSize :'3rem',
        color :'rgba(0, 0, 0, .7)'
    },
    box: {
        display :'flex',
        flexDirection :'column',
        justifyContent :'center',
        width : '60%',
        '& > *' : {
            margin :'.3rem 0',
        },
    },
    userName : {
        fontSize: '2rem',
        fontWeight : 700,
        fontFamily : 'Avenir Next'
    },
    info :{
        fontSize :'1.4rem',
        background : theme.palette.primary.light,
        padding :'.2rem .8rem',
        color :'#fff',
        borderRadius :'1rem',
        '&:last-child' :{
            width : '7rem',
        }
    },
    editBtn :{
        margin :'5rem 1rem',
        border : 'none',
        color : '#fff',
        background: 'inherit',
        cursor : 'pointer',
        display : 'iniline-flex',
        '& > *' :{
            margin :'.5rem'
        },
        width :'17.5rem'
    }
}));

export default useDetailsStyle;