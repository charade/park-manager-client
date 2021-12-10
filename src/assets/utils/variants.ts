import { Variants } from "framer-motion";
import { userRole } from "../../utils/contants";

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
        x : '-20rem',
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
};
export const select : Variants = {
    animate : open => ({
        width : open ? '12rem' : '4.8rem',
        border : open ? '1px solid rgba(0, 0, 0, .3)' : 'none',
        transition : {
            ease : "linear",
            duration : .1
        }
    })
}
export const selectFloors : Variants = {
    open : {
        opacity : 1
    },
    close : {
        opacity : 0,
        transition : {
            duration : .5
        }
    }
};
export const sidebar : Variants = {
    open : {
        width : '100%',
        opacity : 1,
        transition : {
            when : 'afterChildren',
            damping : 18,
            duration : .1
        }
    },
    close : {
        width : '0',
        opacity : 0,
        transition : {
            when : 'afterChildren',
            damping : 20,
            delay: .2
        }
    }
};
export const sidebarToolbar : Variants = {
    open : {
        transition : {
            type : 'spring',
            staggerChildren : .3,
            damping : 18,
        }
    },
    close : {
        transition : {
            when : 'afterChildren',
            staggerChildren : -.1,
            damping : 20
        }
    }
};
export const sidebarItem :  Variants = {
    open : {
        x : 0,
        opacity : 1,
        transition : {
            duration : .4,
            type : 'spring'
        }
    },
    close : {
        x : 100,
        opacity : 0
    }
};
export const role : Variants = {
    role : custom =>({
        background : custom === userRole.PUBLIC ? 'rgba(157, 203, 234, .7)' : 'rgb(161, 229, 149, .7)'  
    }),
    
};
