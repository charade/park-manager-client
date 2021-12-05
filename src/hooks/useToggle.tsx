import { useState } from "react";

const useToggle = () => {
    const [ isTrue, set ] = useState<boolean>(false);

    const toggle: () => void = () => set(!isTrue);

    return { isTrue, toggle } 
};

export default useToggle;