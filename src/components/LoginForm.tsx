import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import { useLoginFormStyle } from '../assets/styles/index.styles';
import { Input } from './Input';

export const LoginForm = () => {
    const [ step, setStep ] = useState<number>(0)
    const classes = useLoginFormStyle();

    const handleSubmit = () => null
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => null;
    const handleSwitchStep = () => setStep(step ? 0 : 1);

    return(
        <AnimateSharedLayout>
        <motion.form layout onSubmit = { handleSubmit } className = { classes.container }>
            <h2 className = { classes.title }> { step ? 'Sign up' : 'Sign in' } </h2>
                <AnimatePresence>
                    {step && 
                        <> 
                            <Input onChange = { handleChange } name = 'firstName' label = 'email'/>
                            <Input onChange = { handleChange } name = 'lastName' label = 'lastName'/>
                        </> 
                        }
                </AnimatePresence>
                
                <Input onChange = { handleChange } name = 'email' label = 'email'/>
                <Input onChange = { handleChange } name = 'password' label = 'password'/>
                <button type = 'submit' className = {classes.submitBtn}> Submit </button>
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
        </motion.form>
        </AnimateSharedLayout>
    )
}
