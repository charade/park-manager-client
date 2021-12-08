import {  makeStyles } from '@material-ui/core';

const useDefaultMsgStyle = makeStyles(theme => ({
    container : {
        width :'100%',
        height :'100%',
        display :'flex',
        background :'#4A4A4A',
        alignItems :'center',
    },
    
    message : {
        color: '#fff',
        fontSize :'1.4rem',
        width :'100%',
        textAlign :'center',
    }
}));

export default useDefaultMsgStyle;