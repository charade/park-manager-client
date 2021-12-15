import { makeStyles } from '@material-ui/core';

const useChartStyles = makeStyles(theme => ({
    container : {
        height :'40%',
        // background: theme.palette.secondary.light,
        width :'100%',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default useChartStyles;