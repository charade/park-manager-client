import { useState } from "react";

const useToggle = () => {
    const [ clicked, set ] = useState<boolean>(false);

    const click: () => void = () => set(!clicked);

    return [ clicked, click ]
};

export default useToggle;