
type BlurFunction = (open : boolean) => void ;

const useCloseOnBlur = (setOpen : BlurFunction) => {

    return (e : React.FocusEvent) => {
        if(!e.currentTarget.contains(e.relatedTarget)){
            setOpen(false);
        }
    };
}

export default useCloseOnBlur;