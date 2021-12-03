import { useMainContainerStyle } from '../assets/styles/index.styles';
import { Navbar } from './NavBar';

export const MainContainer = () => {
    const classes = useMainContainerStyle();

    return(
        <div className = { classes.container }>
            <Navbar />
        </div>
    )
}