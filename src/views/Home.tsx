import { useHomeStyle } from '../assets/styles/index.styles';
import { Landing } from './Landing';
import { Main } from './Main';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as userActionCreators from '../state/actions-creators/users-action-creators';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const { loadUser } = bindActionCreators(userActionCreators, dispatch);
    const classes = useHomeStyle();

    useEffect(() => void loadUser(), []);
    
    return(
        <div className = { classes.root }>
            <Landing />
            <Main />
        </div>
    )
};
export default Home;