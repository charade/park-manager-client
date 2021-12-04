import { useEffect } from 'react';
import { useLoginViewStyle } from '../assets/styles/index.styles';
import { LoginForm } from '../components/LoginForm';

const LoginView = () => {
    const classes = useLoginViewStyle();

    useEffect(() => localStorage.removeItem('auth'),[]);
    
    return(
        <div className = { classes.root }>
            <LoginForm />
        </div>
    )
};
export default LoginView;