import React from 'react';
import { useButtonStyle } from '../assets/styles/index.styles';
type ButtonPropsT = {
    label ?: string,
    className ?: string,
    icon ?: React.ReactNode,
    type ?: "submit",
    iconPosition ?: "before" | "after",
    onClick ?: () => void,
};

export const Button = (props : ButtonPropsT) => {
    const classes = useButtonStyle();

    return(
        <button className = { classes.button && props.className } type = { props.type }>
            { props.iconPosition === 'before' && props.icon }
            { props.label }
            { !props.label && props.icon }
            { props.iconPosition === 'after' && props.icon }
        </button>
    )
}