import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import { useLoginFormStyle, useSubmitBtnStyle } from '../assets/styles/index.styles';
import { Input } from './Input';
import { Button } from './Button';
import { SignDataTypes, SIGN_DEFAULT_VALUE  } from '../types/user';
import { users, status } from '../services';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';

export const LoginForm = () => {
    const [data, setData] = useState<SignDataTypes>(SIGN_DEFAULT_VALUE);
    const [ step, setStep ] = useState<number>(0)
    const classes = useLoginFormStyle();
    const buttonClasses = useSubmitBtnStyle();
    const navigate = useNavigate();

    const handleSwitchStep = () => setStep(step ? 0 : 1);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setData({...data, [target.name] : target.value})
    };

    const handleSubmit = async(e : React.SyntheticEvent) => {
        e.preventDefault();

        if(!step && data.email && data.password){
            const { email, password } = data;
            const response = await users.login({email, password})
            if(response && response.status === status.SUCCESS){
                const auth = response.data;
                localStorage.setItem('auth', JSON.stringify(auth))
                navigate(`/home`);
            };

        };
        //check wether step is register and every data are truthy
        if(step && Object.values(data).every((value) => value)){
            // const response = await users.register(data);
        }
    }
    
    return(
        <AnimateSharedLayout>
            <Form  onSubmit = { handleSubmit } caption = { step ? 'Sign up' : 'Sign in' } >
                {/* animate in/ out extra data for sign up */}
                <AnimatePresence>
                    {step && 
                        <> 
                            <Input onChange = { handleChange } name = 'firstName' label = 'first name'/>
                            <Input onChange = { handleChange } name = 'lastName' label = 'last name'/>
                            <Input onChange = { handleChange } name = 'companyName' label = 'company name'/>
                        </> 
                        }
                </AnimatePresence>
                
                <Input onChange = { handleChange } name = 'email' label = 'email'/>
                <Input onChange = { handleChange } name = 'password' label = 'password'/>
                <Button type = 'submit' className = {buttonClasses.button} label = 'Submit'/>
                <div className = { classes.footer }>
                    <span> { step ? 'You already have an account ' : " You don't have an account" } </span>
                    <span 
                        role = 'button'
                        onClick = { handleSwitchStep }
                        className = { classes.stepSwitch }
                    > 
                        { step ? 'sign in' : 'sign up' } 
                    </span>
                </div>
            </Form>
        </AnimateSharedLayout>
    )
}
