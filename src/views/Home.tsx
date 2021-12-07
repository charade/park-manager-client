import { useEffect } from 'react';
import { useHomeStyle } from '../assets/styles/index.styles';
import { Landing } from './Landing';
import { Main } from './Main';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { usersActionCreators, placesActionCreators, colleaguesActionCreators } from '../state/actions-creators';

const Home = () => {
    const dispatch = useDispatch();
    const { loadUser } = bindActionCreators(usersActionCreators, dispatch);
    const { loadPlaces } = bindActionCreators(placesActionCreators, dispatch);
    const { loadColleagues } = bindActionCreators(colleaguesActionCreators, dispatch);

    const classes = useHomeStyle();

    useEffect(() => {
        loadUser();
        loadPlaces();
        loadColleagues();
    },[]);
    
    return(
        <div className = { classes.root }>
            <Landing />
            <Main />
        </div>
    )
};

export default Home;