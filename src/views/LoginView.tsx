import { useEffect } from 'react';
import { useLoginViewStyle } from '../assets/styles/index.styles';
import { LoginForm } from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formActionCreators } from '../state/actions-creators';  
import { ReducerRootStateType } from '../state';
import { formStep } from '../utils/contants';

const LoginView = () => {
    const classes = useLoginViewStyle();
    const dispatch = useDispatch();
    const step = useSelector((store : ReducerRootStateType) => store.form);
    const { setFormStep } = bindActionCreators(formActionCreators, dispatch);

    useEffect(() =>{
        localStorage.removeItem('auth');
        localStorage.removeItem('floors');
    } ,[]);
    
    //set form step to register user without company regitered yet
    const handleSwitchStep = () => setFormStep(formStep.REGISTER);

    return(
        <div className = { classes.root }>
            <LoginForm />
            {step !== formStep.REGISTER && 
                <span
                onClick = { handleSwitchStep } 
                className = { classes.register }
                >
                    Your company is not registered yet ?
                </span>
            }
        </div>
    )
};
export default LoginView;