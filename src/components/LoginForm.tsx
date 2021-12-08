import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState, useMemo } from 'react';
import { useSubmitBtnStyle } from '../assets/styles/index.styles';
import { Input } from './Input';
import { Button } from './Button';
import { SignDataTypes, SIGN_DEFAULT_VALUE  } from '../utils/dataTypes/user';
import { users, status } from '../services';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { Snackbar } from './Snackbar';
import { useNotification } from '../hooks';
import { FormStepSwitch } from './FormStepSwitch';
import { bindActionCreators } from 'redux';
import { formActionCreators } from '../state/actions-creators';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { formStep, userRole } from '../utils/contants';
/**
 *  3 step from : 0 is login, 1 is sign up, 2 is create company account
 *  submit the same form fields form signup and register company
 */
export const LoginForm = () => {
    const [data, setData] = useState<SignDataTypes>(SIGN_DEFAULT_VALUE);
    const notification = useNotification();
    const buttonClasses = useSubmitBtnStyle();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setFormStep } = bindActionCreators(formActionCreators, dispatch);
    const step = useSelector((store : ReducerRootStateType) => store.form);

    const title = useMemo(() => {
        switch(step){
            case formStep.LOGIN : return 'Login';
            case formStep.SIGN_UP: return 'Sign up';
            case formStep.REGISTER : return 'Register';
        }
    }, [step]);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setData({...data, [target.name] : target.value});
    };
    const handleSubmit = async(e : React.SyntheticEvent) => {
        e.preventDefault();
        //Login step
        if((step === formStep.LOGIN) && data.email && data.password){
            const { email, password } = data;
            const response = await users.login({email, password}).catch(error => {
                //error handling
                const message = error.response.data.description;
                notification.set({ severity : "error", message });
                notification.setOpen(true);
            })
            if(response && response.status === status.SUCCESS){
                const auth = response.data;
                localStorage.setItem('auth', JSON.stringify(auth));
                navigate(`/home`);
            };
        };
        //sign up step
        if(step && Object.values(data).every((value) => value)){
            const user = {...data};
            //if company did not exist yet so signin up user is admin
            if(step === formStep.REGISTER){
                user.role = userRole.ADMIN
            };
            const response = await users.register(user).catch(err => {
                const message = err.response.data.description;
                notification.set({ severity : "error", message });
            });
            //success notification & redirect to login
            if(response && response.status === status.CREATED){
                setFormStep(formStep.LOGIN);
                notification.set({ severity : "info", message : 'You can connect to your account, enjoy !'});
            };
            notification.setOpen(true);
            console.log(user)
        };
    };
    
    return(
        <AnimateSharedLayout>
            <Form  onSubmit = { handleSubmit } caption = { title } >
                <AnimatePresence>
                    {step && 
                        <> 
                        <Input onChange = { handleChange } name = 'firstName' label = 'first name' required/>
                        <Input onChange = { handleChange } name = 'lastName' label = 'last name' required/>
                        <Input onChange = { handleChange } name = 'companyName' label = 'company name' required/>
                        </> 
                        }
                </AnimatePresence>
                <Input onChange = { handleChange } name = 'email' label = 'email' required/>
                <Input onChange = { handleChange } name = 'password' label = 'password' required/>
                <Button type = 'submit' className = {buttonClasses.button} label = 'Submit'/>
                <FormStepSwitch/>
            </Form>
            <Snackbar 
            open = { notification.open }
            setOpen = { notification.setOpen } 
            message = { notification.value?.message }
            severity = { notification.value?.severity}
            />
        </AnimateSharedLayout>
    )
}
