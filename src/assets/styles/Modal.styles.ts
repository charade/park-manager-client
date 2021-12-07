import { makeStyles } from "@material-ui/core/styles";

const useModalStyle = makeStyles({
    backdrop : {
        position : 'absolute',
        zIndex : 4,
        display :'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background : 'rgba(0, 0, 0, .6)',
        width : '100%',
        height : '100%',
        backdropFilter : 'grayscale(30%) blur(.2rem)'
    }
});

export default useModalStyle;