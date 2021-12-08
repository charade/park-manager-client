import { useDefaultMsgStyle } from '../assets/styles/index.styles';

type DefaultMsProps = {
    when : boolean,
    message : string
}

export const DefaultMessage = ({ when, message } : DefaultMsProps) => {
    const classes = useDefaultMsgStyle();

    return(
        when ?  
            <div className = { classes.container }>
                <h2 className = { classes.message }>{ message }</h2>
            </div>
            : null
    )
}