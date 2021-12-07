import { Popper } from "./Popper";
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from "./Checkbox";
import { ReducerRootStateType } from "../state";
import { placeReservationActionCreators } from "../state/actions-creators";
import { places } from "../services";
import { bindActionCreators } from "redux";
import { useFinderStyle } from '../assets/styles/index.styles';
import { useState } from "react";
type FinderProps = {
    anchorEl : Element | null
    open : boolean
    setOpen : (open : boolean) => void
};

export const Finder = ({ anchorEl, open, setOpen } : FinderProps ) => {
    const dispatch = useDispatch();
    const [requestSuccess, setRequestSuccess] = useState<boolean>(false);
    const { resetPlace } = bindActionCreators(placeReservationActionCreators, dispatch);
    const place = useSelector((store: ReducerRootStateType) => store.reservedPlace);
    const classes = useFinderStyle();

    const handleFreePlace = () => {
        place && places.reset({id : place.id}).then(() => {
            setRequestSuccess(true);
            resetPlace();
        })
    }
    
    return(
        <Popper 
            anchorEl = { anchorEl }
            open = { open }
            setOpen = { setOpen }
            props = {{
                origin : { vertical : 'bottom', horizontal :'right' },
                transform : { vertical :'top', horizontal :'right' }
            }}
        >
            <div className = { classes.container }>
                {place &&
                <>
                    <div className = { classes.info }>
                        <span>Your are parked</span>
                        <span>floor : <strong>{ place?.floor }</strong></span>
                        <span>place n° : <strong> { place?.placeNumber } </strong></span>
                    </div>
                    <div className ={ classes.action }>
                        <Checkbox 
                        id = { place.id } 
                        onChange = { handleFreePlace } 
                        success = { requestSuccess }/> 
                        <span className = { classes.actionText }>Free place</span>
                    </div>
                </>
                }
            </div>
        </Popper>
    )
}