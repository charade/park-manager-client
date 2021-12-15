import { makeStyles } from "@material-ui/core";

const usePlacesTableStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        width :'100%',
        height : '55%',
        margin :'2rem 0',
        color : 'rgba(0, 0, 0, .7)',
        fontSize :'1.4rem',
        background : theme.palette.secondary.main,
        [theme.breakpoints.up('sm')] :{
            height : '46%',
        },
    },
    table : {
        width :'100%',
        borderCollapse : 'collapse',
        tableLayout : 'fixed',
    },
    headRow : {
        height :'4rem !important',
        background : 'rgb(34, 40, 64)',
        color :'#fff',
        borderBottomLeftRadius: '0 !important',
        borderBottomRightRadius : '0 !important'
    },
    row: {
        display :'flex',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        height : '2.96rem',
        width : '100%',
        borderRadius :'.4rem',
        '&:nth-child(even)' : {
            background : 'rgba(255, 255, 255, .8)'
        },
    },
    bodyContainer: {
        height : '100%',
        overflow : 'scroll',
    },
    cell : {
        display : 'flex',
        justifyContent :'center',
        alignItems :'center',
        flex : 1,
        width : '30%',
        height :'100%',
        '&:nth-child(3n + 2)':{
            background: 'rgba(0, 0, 0, .06)',
        }
    }
}));

export default usePlacesTableStyle;