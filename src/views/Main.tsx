import { useMainStyle } from '../assets/styles/index.styles';
import { MainContainer } from '../components/MainContainer';
import { Sidebar } from '../components/Sidebar';

export const Main = () => {
    const classes = useMainStyle();

    return(
        <div className = { classes.main }>
            <MainContainer />
            <Sidebar />
        </div>
    )
}