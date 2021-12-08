import { useMemo, useState } from 'react';
import { usePlacesTableStyle } from '../assets/styles/index.styles';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { Checkbox } from './Checkbox';
import { sortByUpdateDate } from '../utils/functions';
import { places } from '../services';
import { useNotification } from '../hooks';
import { Snackbar } from './Snackbar';
import { placesActionCreators, placeReservationActionCreators } from '../state/actions-creators';
import { bindActionCreators } from 'redux';
import { DefaultMessage } from './DefaultMessage';

export const PlacesTable = () => {
    const availablePlaces = useSelector((store : ReducerRootStateType) => store.places);
    const notification = useNotification();
    const dispatch = useDispatch();
    const classes = usePlacesTableStyle();
    const { removePlace } = bindActionCreators(placesActionCreators, dispatch);
    const { setReservation } = bindActionCreators(placeReservationActionCreators, dispatch);
    const success = useMemo(() => notification.value?.severity === 'success' || false,[notification]);
    const [ selectedRow, setSelectedRow ] = useState<string>('');

    const handleChange = (id : string) => async() => {
        setSelectedRow(id);
        places.reserve({id})
        .then((response) => {
            //upade finder
            setReservation(response.data);
            notification.set({severity : 'success', message : 'Succesfully reserved'});
            notification.setOpen(true);
            //remove place from available ones
            setTimeout(() => {
                removePlace(id);
                setSelectedRow('')
            }, 2000);
        })
        .catch(err => {
            const message = err.response.data.description;
            notification.set({ message, severity : 'error' });
            notification.setOpen(true);
        });
    };

    return(
        <div className = { classes.container }>
            <table className = { classes.table } aria-label = 'table-header'>
                <thead>
                    <tr className = { `${classes.row } ${ classes.headRow }`}>
                        <td className = { classes.cell }><span>Floor</span></td>
                        <td className = { classes.cell }><span>N°</span></td>
                        <td className = { classes.cell }><span>Reserve</span></td>
                    </tr>
                </thead>
            </table> 
            <div className = { classes.bodyContainer }>

                <DefaultMessage when = { !availablePlaces.length } message = "You need to add some parking places"/>
                
                {availablePlaces.length &&
                    <table className = { classes.table } aria-label = 'table-body'>
                        <tbody>
                            { sortByUpdateDate(availablePlaces).map((place, i )=> {
                                return(
                                    <tr key = { `place-${place.id}-row-${i}`} className = { `${classes.row }`}>
                                        <td className = { classes.cell }><span>{ place.floor }</span></td>
                                        <td className = { classes.cell }><span>{ place.placeNumber }</span></td>
                                        <td className = { classes.cell }>
                                            <Checkbox 
                                            //only check selected row
                                            success = { success && selectedRow === place.id } 
                                            onChange = { handleChange(place.id) }/>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
            <Snackbar 
                message = { notification.value?.message }
                severity = { notification.value?.severity }
                open = { notification.open }
                setOpen = { notification.setOpen }
            />
        </div>
    )
};