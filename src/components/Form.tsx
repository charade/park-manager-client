import React, { useEffect, useRef } from 'react';
import { useFormStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';

type FormPropsT  = {
    children : React.ReactNode,
    onSubmit : (e : React.SyntheticEvent) => void,
    className ?: string
    onBlur ?: (e : React.FocusEvent) => void
    caption ?: string
}
export const Form = ({ children, onSubmit, className, onBlur, caption} : FormPropsT) => {
    const classes = useFormStyle();
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        formRef.current && formRef.current.focus();
    },[]);

    return(
        <motion.form
            ref = {formRef}
            onBlur = { onBlur }
            tabIndex = { 0 } 
            layout 
            className = { `${classes.container } 
            ${className}`} 
            onSubmit = { onSubmit }
        >
            <h2 className = { classes.caption }> { caption } </h2>
            { children }
        </motion.form>
    )
}