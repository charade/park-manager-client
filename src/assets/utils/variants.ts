import { Opacity } from "@mui/icons-material";
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
export const searchField : Variants = {
    animate : open => ({
        width : open ? '100%' : '4.8rem',
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
}