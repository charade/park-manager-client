import { makeStyles } from "@material-ui/core";

const useUpdateUserStyle = makeStyles(theme => ({
    
    block : {
        display :'flex',
        flexDirection : 'column',
        fontSize :'1.5rem',
        margin :'1rem 0'
    },
    box : {
        display :'flex',
        background: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    reminder : {
        color : 'rgba(255, 255, 255, .6)',
        margin :'1rem'
    },
    btn :{
        background :'transparent',
        color :'#fff',
        border:'none',
        '& > *' : {
            margin :'.6rem',
            border: 'none',
        },
    }
}));

export default useUpdateUserStyle;