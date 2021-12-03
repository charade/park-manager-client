import React, { useState, useRef, CSSProperties } from 'react';
import { useInputStyle } from '../assets/styles/index.styles';
import { motion, Variants } from 'framer-motion';

type InputProps = {
    label :string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
    id ?: string
    name: string,
    labelStyle ?: CSSProperties,
    inputStyle ?: CSSProperties,
    required ?: boolean
}

const labelVariants : Variants = {
    focus : {
        top : '-1rem',
        opacity : .5
    },
    blur : {
        top : '1rem',
        opacity : 1
    }
}

const underLineVariants : Variants = {
    focus : {
        width : '100%',
        opacity : 1
    },
    blur : {
        width : '0',
        opacity : 0
    }
}

export const Input = ({ label, onChange, id, name, labelStyle, inputStyle, required } : InputProps) => {
    const classes = useInputStyle();
    const inputRef = useRef<HTMLInputElement>(null);
    const [ focus, setFocus ] = useState<boolean>(false);

    const handleFocus = () => {
        if(inputRef.current){
            setFocus(true);
            inputRef.current.focus();
        }
    };
        
    const handleBlur = (e : React.FocusEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        !target.value && setFocus(false);
    };
        
    return(
        <motion.div
            layout 
            animate = { focus ? "focus" : "blur" }
            className = { classes.fieldContainer }
            onClick = { handleFocus }
        >
            <motion.label
                variants = { labelVariants } 
                htmlFor = { id } 
                className = { classes.label }
                style = { labelStyle }
            > 
                { label } 
            </motion.label>
            <input
                required = { required } 
                ref = { inputRef } 
                className = { classes.inputField } 
                id = { id} 
                name = { name } 
                onChange = { onChange }
                onBlur = { handleBlur }  
                style = { inputStyle }
            />
            <motion.span
                transition = {{ease  : 'linear', duration : .2}}    
                variants = { underLineVariants } 
                className = { classes.underline }
            >
            </motion.span>
        </motion.div>
    )
}