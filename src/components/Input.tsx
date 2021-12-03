import React, { useState, useRef, CSSProperties } from 'react';
import { useInputStyle } from '../assets/styles/index.styles';
import { motion } from 'framer-motion';
import { variants } from '../assets/utils';

type InputProps = {
    label :string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
    id ?: string
    name: string,
    labelStyle ?: CSSProperties,
    inputStyle ?: CSSProperties,
    required ?: boolean
    value ?: string | number,
    helperText ?: string
}

export const Input = ({
    value,
    label,
    onChange,
    id,
    name,
    labelStyle,
    inputStyle,
    required,
    helperText
    } : InputProps) => {

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
                variants = { variants.inputLabel } 
                htmlFor = { id } 
                className = { classes.label }
                style = { labelStyle }
            > 
                { label } 
            </motion.label>
            <input
                data-helpertext = { helperText }
                value = { value }
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
                variants = { variants.inputUnderLine } 
                className = { classes.underline }
            >
            </motion.span>
        </motion.div>
    )
}