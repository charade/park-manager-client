import { useMemo } from 'react';
import { useStepSwitchFormStyle } from '../assets/styles/index.styles';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formActionCreators } from '../state/actions-creators';
import { ReducerRootStateType } from '../state';
import { formStep } from '../utils/contants';

export const FormStepSwitch = () => {
    const classes = useStepSwitchFormStyle();
    const dispatch = useDispatch();
    const { setFormStep } = bindActionCreators(formActionCreators, dispatch);
    const step = useSelector((store : ReducerRootStateType) => store.form);

    const count = useMemo(() => ({
        signin : 'You already have an account',
        signup : "You don't have an account",
    }),[]);

    const handleSwitchStep = () => {
        setFormStep(step ? formStep.LOGIN : formStep.SIGN_UP);
    };

    return(
        <div className = { classes.footer }>
            <span> 
                {step ? count.signin : count.signup}
            </span>
            <span 
            role = 'button'
            onClick = { handleSwitchStep }
            className = { classes.stepSwitch }
            > 
                {step ? 'sign in' : 'sign up'} 
            </span>
        </div>
    )
}
