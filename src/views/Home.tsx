import { useEffect } from 'react';
import { useHomeStyle } from '../assets/styles/index.styles';
import { Landing } from './Landing';
import { Main } from './Main';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { places } from '../services';
import {
    usersActionCreators,
    placesActionCreators,
    colleaguesActionCreators,
    placeReservationActionCreators
 } from '../state/actions-creators';

const Home = () => {
    const dispatch = useDispatch();
    const { setUser } = bindActionCreators(usersActionCreators, dispatch);
    const { loadPlaces } = bindActionCreators(placesActionCreators, dispatch);
    const { loadColleagues } = bindActionCreators(colleaguesActionCreators, dispatch);
    const { setReservation } = bindActionCreators(placeReservationActionCreators, dispatch);

    const classes = useHomeStyle();

    useEffect(() => {
        //get user from localStorage
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            const user = JSON.parse(storedUser);
            setUser(user);
        };
        //request all available place
        loadPlaces();

        //load colleagues for admin user
        loadColleagues();
        
        //where user parked
        const findMyCar = async() => {
            await places.find().then(place =>{
                console.log(place)
                setReservation(place.data);
            }).catch(() => null);
        }
        findMyCar();
    },[]);
    
    return(
        <div className = { classes.root }>
            <Landing />
            <Main />
        </div>
    )
};

export default Home;