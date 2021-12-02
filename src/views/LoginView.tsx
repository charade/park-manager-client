import { useLoginViewStyle } from '../assets/styles/index.styles';
import { LoginForm } from '../components/LoginForm';

export const LoginView = () => {
    const classes = useLoginViewStyle();

    return(
        <div className = { classes.root }>
            <LoginForm />
        </div>
    )
}