import { Popper } from "./Popper";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "./Button";
import { ReducerRootStateType } from "../state";
import { placeReservationActionCreators, placesActionCreators } from "../state/actions-creators";
import { places } from "../services";
import { bindActionCreators } from "redux";
import { useFinderStyle } from '../assets/styles/index.styles';
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { DefaultMessage } from './DefaultMessage';

type FinderProps = {
    anchorEl : Element | null
    open : boolean
    setOpen : (open : boolean) => void
};

export const Finder = ({ anchorEl, open, setOpen } : FinderProps ) => {
    const dispatch = useDispatch();
    const [requestSuccess, setRequestSuccess] = useState<boolean>(false);
    const { resetPlace } = bindActionCreators(placeReservationActionCreators, dispatch);
    const { addPlace } = bindActionCreators(placesActionCreators, dispatch);
    const reservedPlace = useSelector((store: ReducerRootStateType) => store.reservedPlace);
    const user = useSelector((store: ReducerRootStateType) => store.user);
    const classes = useFinderStyle();

    useEffect(() => {
        requestSuccess && setRequestSuccess(false);

    },[requestSuccess]);

    const handleFreePlace = () => {
        reservedPlace && places.reset({id : reservedPlace.id}).then((response) => {
            setRequestSuccess(true);
            resetPlace();
            //reset place in availbale places table
            addPlace(response.data);
        });
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
            <DefaultMessage 
            when = { !reservedPlace }
            message = "Here you can remind where you parked..."
            />
            {reservedPlace &&
                <div className = { classes.container }>
                    <div className = { classes.info }>
                        <span className = { classes.userName }>Hello { user?.firstName }</span>
                        <span>Your parked</span>
                        <span>floor : {` ${ reservedPlace?.floor }`}</span>
                        <span>place :  {` ${ reservedPlace?.placeNumber }`}</span>
                    </div>
                    <div className ={ classes.action }>
                        <Button
                        className = { classes.action } 
                        onClick = { handleFreePlace } 
                        icon = { <DeleteIcon /> }
                        label = 'free place'
                        iconPosition = "before"
                        />
                    </div>
                </div>
            }
        </Popper>
    )
}