import { useMainStyle } from '../assets/styles/index.styles';
import { MainContainer } from '../components/MainContainer';

export const Main = () => {
    const classes = useMainStyle();

    return(
        <div className = { classes.main }>
            <MainContainer />
        </div>
    )
}