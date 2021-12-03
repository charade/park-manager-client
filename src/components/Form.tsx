import React, { useEffect, useRef } from 'react';
import { useFormStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { Helper } from './Helper';

type FormPropsT  = {
    children : React.ReactNode,
    onSubmit : (e : React.SyntheticEvent) => void,
    className ?: string
    onBlur ?: (e : React.FocusEvent) => void
    caption ?: string,
    error ?:boolean,
    helperText ?:string,
    ref ?: Element
}
export const Form = ({
    children,
    onSubmit,
    className,
    onBlur,
    caption,
    error,
    helperText} : FormPropsT) => {
        
    const classes = useFormStyle();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        formRef.current && formRef.current.focus();
    },[]);

    return(
        <motion.form
            layout 
            ref = {formRef}
            onBlur = { onBlur }
            tabIndex = { 0 } 
            className = { `${classes.container } 
            ${className}`} 
            onSubmit = { onSubmit }
        >
            <h2 className = { classes.caption }> { caption } </h2>
            <Helper message = { helperText as string } when = { error }/>
            { children }
        </motion.form>
    )
}