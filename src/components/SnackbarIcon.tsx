import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ErrorIcon from '@mui/icons-material/Error';

export type Severity = {
    severity : "error" | "success" | "info" | undefined
};

type Props = Severity & {
    className : string
};

export const SnackbarIcon = ({ severity, className } : Props) => {

    switch(severity){
        case "error" : return <ErrorIcon className = { className } />
        case "info" : return <LightbulbIcon className = { className } />
        default : return <CheckCircleIcon className = { className } />
    }
}