import { makeStyles } from "@material-ui/core";

const usePlacesTableStyle = makeStyles(theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        margin :'2rem 0',
        border: '1px solid rgba(0, 0, 0, .3)',
        width :'100%',
        fontFamily : theme.typography.fontFamily,
        color : '#fff',
        background : theme.palette.primary.main,
        fontSize :'1.4rem',
        [theme.breakpoints.up('sm')] : {
            width : '90%',
        },
        height : '36%'
    },
    table : {
        borderCollapse : 'collapse',
        tableLayout : 'fixed',
        width :'100%'
    },
    bodyContainer: {
        height : '100%',
        overflow : 'scroll',
    },
    row: {
        height : '2.96rem',
        width : '100%',
        display :'flex',
        alignItems : 'center',
        justifyContent: 'space-evenly',
        '&:nth-child(even)' : {
            background : 'rgba(0, 0, 0, .1)'
        }
    },
    headRow : {
        background : 'rgba(0, 0, 0, .37)',
    },
    cell : {
        borderBottom : '1px solid rgba(255, 255, 255, .5)',
        width : '30%',
        flex : 1,
        height :'100%',
        display : 'flex',
        justifyContent :'center',
        alignItems :'center',
    }
}));

export default usePlacesTableStyle;