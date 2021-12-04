const useCloseOnBlur = (setOpen : (open : boolean) => void) => {
    return (e : React.FocusEvent) => {
        if(!e.currentTarget.contains(e.relatedTarget))
            setOpen(false);
    };
}

export default useCloseOnBlur;