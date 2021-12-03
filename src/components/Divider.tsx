import { useDividerStyle } from '../assets/styles/index.styles';

type PropsT = {
    label ?: string
    className ?: string
}

export const Divider = ({label,className } : PropsT) => {
    const classes = useDividerStyle();

    return(
        <div className = {`${classes.line } ${className }`}>
            <h4 className = { classes.label }> {label } </h4>
        </div>
    )
}