import { makeStyles } from "@material-ui/core";

const usePlacesTableStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        margin :'2rem 0',
        width :'100%',
        fontFamily : theme.typography.fontFamily,
        color : 'rgba(0, 0, 0,)',
        background : theme.palette.secondary.main,
        fontSize :'1.4rem',
        height : '36%'
    },
    table : {
        borderCollapse : 'collapse',
        tableLayout : 'fixed',
        width :'100%'
    },
    headRow : {
        background : 'rgb(34, 40, 64)',
        color :'#fff',
        height :'4rem !important',
        borderRadius :'0 0 4rem 0 4rem !important'
    },
    row: {
        height : '2.96rem',
        width : '100%',
        display :'flex',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        '&:nth-child(even)' : {
            background : 'rgba(255, 255, 255, .8)'
        },
        borderRadius :'.4rem'
    },
    bodyContainer: {
        height : '100%',
        overflow : 'scroll',
    },
    cell : {
        width : '30%',
        flex : 1,
        height :'100%',
        display : 'flex',
        justifyContent :'center',
        alignItems :'center',
        '&:nth-child(3n + 2)':{
            background: 'rgba(0, 0, 0, .06)',
        }
    }
}));

export default usePlacesTableStyle;