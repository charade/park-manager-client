import { SnackbarType } from "../components/Snackbar"
import { useState } from "react"

const useNotification = () => {
    const [ value, set ] = useState<SnackbarType>();
    const [ open, setOpen ] = useState<boolean>(false);

    return { value , set , open, setOpen }
}

export default useNotification;