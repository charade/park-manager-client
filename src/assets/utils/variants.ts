import { Variants } from "framer-motion";

export const inputLabel : Variants = {
    focus : {
        top : '-1rem',
        opacity : .5
    },
    blur : {
        top : '1rem',
        opacity : 1
    }
};
export const inputUnderLine : Variants = {
    focus : {
        width : '100%',
        opacity : 1
    },
    blur : {
        width : '0',
        opacity : 0
    }
};
export const placeForm : Variants = {
    open : {
        opacity : 1,
        y : 0,
        transition :{
            type : 'spring',
            damping : 20
        }
    },
    close : {
        opacity : 0,
        y : 200
    }
};
export const select : Variants = {
    animate : open => ({
        width : open ? '8rem' : '4.8rem',
        border : open ? '1px solid rgba(0, 0, 0, .3)' : 'none',
        transition : {
            ease : "linear",
            duration : .1
        }
    })
}
export const snackbar : Variants = {
    open : {
        x : 0,
        opacity : 1,
        transition : {
            type : 'spring',
            damping : 20
        }
    },
    close : {
        x : '20rem',
        opacity : 0,
        transition : {
            duration  : .5
        }
    }
};
export const landing : Variants = {
    open : {
        width : '100%',
        opacity :1
    },
    close : {
        width : '0',
        opacity : 0,
        transition : {
            delay : .38
        }
    }
};
export const logo: Variants = {
    open : {
        y : 0,
        opacity : 1,
        transition : {
            type : 'spring',
        }
    },
    close : {
        opacity : 0,
        y : '-15rem',
    }
};
export const popper : Variants = {
    open : {
        height : '8rem',
        opacity : 1,
    },
    close : {
        height : 0,
        opacity : 0
    }
}