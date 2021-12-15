import { useNewAccountReminderStyle } from '../assets/styles/index.styles';
import { LoginT, PersonalData } from '../utils/dataTypes/user';
import { Checkbox } from './Checkbox';
import { Modal } from './Modal';
import CheckIcon from '@mui/icons-material/Check';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useToggle } from '../hooks';

type NewAccountReminderProps = {
    account: LoginT & PersonalData | null,
    open : boolean,
    setOpen : (open : boolean) => void
};
export const NewAccountReminder = (props : NewAccountReminderProps) => {
    const classes = useNewAccountReminderStyle();
    const success = useToggle();

    const handleClose = () =>{
        success.toggle();
        setTimeout(() => props.setOpen(false),300);
    };

    return(
        <Modal open = { props.open }>
            <div className = { classes.container }>
                <div className = { classes.caption }>
                    <h2>User with admin permissions</h2>
                    <CheckIcon className = { classes.captionIcon } />
                </div>
                <span className = { classes.info }>firstName: { props.account?.firstName } </span>
                <span className = { classes.info }>lastName: { props.account?.lastName } </span>
                <span className = { classes.info }>email: { props.account?.email }</span>
                <span className = { classes.info }>password: { props.account?.password } </span>
                <p className = { classes.warning }>
                    <LightbulbIcon/>
                    The given password need to be updated.
                </p>
                <div className = { classes.check }>
                    <Checkbox onChange = { handleClose } success = { success.isTrue }/>
                    I understand
                </div>
            </div>
        </Modal>
    )
}