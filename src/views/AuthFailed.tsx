import { useEffect, useState } from 'react';
import { useAuthFailedStyle } from '../assets/styles/index.styles';
import {  useNavigate} from 'react-router-dom';

const AuthFailed = () => {
    const classes = useAuthFailedStyle();
    const [countDown, setCountDown] = useState<number>(5);
    const navigate = useNavigate();

    useEffect(() => {
        if(countDown <= 1){
            navigate('/')
        }
    },[countDown]);

    useEffect(() => void setInterval(() => setCountDown(count => count - 1), 1000),[])
    return( 
        <div className = { classes.container }>
            <h3 className = { classes.caption }>authentication failed</h3>
            <h3 className = { classes.caption }>Redirecting...{ countDown }</h3>
        </div>
    )
};

export default AuthFailed;