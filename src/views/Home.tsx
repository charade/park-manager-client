import { useHomeStyle } from '../assets/styles/index.styles';
import { Landing } from './Landing';
import { Main } from './Main';

const Home = () => {
    const classes = useHomeStyle();

    return(
        <div className = { classes.root }>
            <Landing />
            <Main />
        </div>
    )
};
export default Home;