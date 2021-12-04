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
    helperText ?: string,
    underline ?: boolean
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
    helperText,
    underline = true
    } : InputProps) => {

    const classes = useInputStyle();
    const inputRef = useRef<HTMLInputElement>(null);
    const [ focused, setFocused ] = useState<boolean>(false);

    const handleFocus = () => {
        if(inputRef.current){
            setFocused(true);
            inputRef.current.focus();
        }
    };
        
    const handleBlur = (e : React.FocusEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        !target.value && setFocused(false);
    };
        
    return(
        <motion.div
        layout 
        tabIndex = { 0 }
        animate = { focused ? "focus" : "blur" }
        className = { classes.fieldContainer }
        onFocus = { handleFocus }
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
            {underline &&
                <motion.span
                transition = {{ease  : 'linear', duration : .2}}    
                variants = { variants.inputUnderLine } 
                className = { classes.underline }
                >
                </motion.span>
            }
        </motion.div>
    )
}